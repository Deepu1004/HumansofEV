
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="border-t border-border/40 bg-background"
    >
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Humans of EV. All rights reserved.</p>
       
      </div>
    </motion.footer>
  );
}

export default Footer;
