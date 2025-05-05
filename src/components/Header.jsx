
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';
import DesktopNavigation from '@/components/navigation/DesktopNavigation';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import navItems from '@/components/navigation/NavItems';

function Header() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.1 }}
      className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm"
    >
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 mr-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
          <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
             <Car className="h-7 w-7 text-primary" />
          </motion.div>
          <span className="font-bold text-xl font-serif tracking-tight text-foreground">Humans of EV</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation navItems={navItems} location={location} />

        {/* Mobile Navigation */}
        <MobileNavigation navItems={navItems} />
      </div>
    </motion.header>
  );
}

export default Header;
