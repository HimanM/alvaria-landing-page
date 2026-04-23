import os
import re

app_file = "d:/Projects/WEB/alvaria-landing-page/src/App.tsx"

with open(app_file, "r", encoding="utf-8") as f:
    content = f.read()

# Create directories
os.makedirs("d:/Projects/WEB/alvaria-landing-page/src/components", exist_ok=True)
os.makedirs("d:/Projects/WEB/alvaria-landing-page/src/utils", exist_ok=True)

animations_code = """export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const floatingAnim = {
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
"""

with open("d:/Projects/WEB/alvaria-landing-page/src/utils/animations.ts", "w", encoding="utf-8") as f:
    f.write(animations_code)

def extract_component(name):
    # Very simple extraction assuming the component starts with `function Name() {` and ends before the next `function ` or `export default`
    match = re.search(f"(function {name}\\(.*?\\).*?\n)(?=function |export default )", content, re.DOTALL)
    if match:
        return match.group(1)
    
    # If it's the last one
    match = re.search(f"(function {name}\\(.*?\\).*?\n)", content, re.DOTALL)
    if match:
        # We'll just manually grab it
        pass
    
    return ""

components = ["Navbar", "Counter", "HeroSection", "FeaturesSection", "PurposeSection", "CtaSection", "Footer"]
comp_texts = {}

# Split the file by "function " and "export default function App"
parts = re.split(r'^(?=function |export default )', content, flags=re.MULTILINE)

for part in parts:
    for comp in components:
        if part.startswith(f"function {comp}("):
            comp_texts[comp] = part

# Update Navbar for mobile overlay & links
navbar = comp_texts["Navbar"]
navbar = navbar.replace('className="hidden lg:flex items-center gap-8"', 'className="hidden lg:flex items-center gap-8"')
navbar = navbar.replace('>Platform</a>', ' href="#hero">Home</a>')
navbar = navbar.replace('>Solutions</a>', ' href="#features">Features</a>')
navbar = navbar.replace('>Resources</a>', ' href="#purpose">Purpose</a>')
navbar = navbar.replace('>Pricing</a>', ' href="#cta">Join</a>')

mobile_menu = """            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-2xl flex flex-col justify-center items-center gap-10 border-none shadow-none"
                >
                  <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-medium hover:text-white/80 transition-colors">Home</a>
                  <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-medium hover:text-white/80 transition-colors">Features</a>
                  <a href="#purpose" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-medium hover:text-white/80 transition-colors">Purpose</a>
                  <a href="#cta" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-medium hover:text-white/80 transition-colors">Join</a>
                </motion.div>
              )}
            </AnimatePresence>"""

navbar = re.sub(r'<AnimatePresence>.*?</AnimatePresence>', mobile_menu, navbar, flags=re.DOTALL)
comp_texts["Navbar"] = navbar

# Update sections to add IDs
comp_texts["HeroSection"] = comp_texts["HeroSection"].replace('<section className="relative', '<section id="hero" className="relative')
comp_texts["FeaturesSection"] = comp_texts["FeaturesSection"].replace('<section className="bg-primary-black', '<section id="features" className="bg-primary-black')
comp_texts["PurposeSection"] = comp_texts["PurposeSection"].replace('<section className="bg-primary-black', '<section id="purpose" className="bg-primary-black')
comp_texts["CtaSection"] = comp_texts["CtaSection"].replace('<section className="bg-primary-black', '<section id="cta" className="bg-primary-black')
comp_texts["Footer"] = comp_texts["Footer"].replace('<footer className="bg-secondary-beige', '<footer id="footer" className="bg-secondary-beige')

# Write components to files with necessary imports
imports_map = {
    "Navbar": "import { useState } from 'react';\nimport { Menu, X } from 'lucide-react';\nimport { motion, AnimatePresence } from 'motion/react';\n\n",
    "Counter": "import { useEffect, useState } from 'react';\n\n",
    "HeroSection": "import { motion } from 'motion/react';\nimport Navbar from './Navbar';\nimport { fadeInUp } from '../utils/animations';\n\n",
    "FeaturesSection": "import { motion } from 'motion/react';\nimport { Laptop, AlignJustify, Share2, Users, ArrowRight } from 'lucide-react';\nimport { fadeInUp, staggerContainer, floatingAnim } from '../utils/animations';\n\n",
    "PurposeSection": "import { motion } from 'motion/react';\nimport Counter from './Counter';\n\n",
    "CtaSection": "import { motion } from 'motion/react';\n\n",
    "Footer": "import { motion } from 'motion/react';\n\n"
}

for comp in components:
    with open(f"d:/Projects/WEB/alvaria-landing-page/src/components/{comp}.tsx", "w", encoding="utf-8") as f:
        f.write(imports_map[comp] + comp_texts[comp] + f"export default {comp};\n")

# Now create new App.tsx
new_app_tsx = """import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PurposeSection from './components/PurposeSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity lg:snap-mandatory bg-primary-black text-primary-white selection:bg-white/20">
      <HeroSection />
      <FeaturesSection />
      <PurposeSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
"""

with open(app_file, "w", encoding="utf-8") as f:
    f.write(new_app_tsx)

print("Refactoring complete.")
