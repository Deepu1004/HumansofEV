
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Frown } from 'lucide-react';

function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="flex flex-col items-center justify-center text-center h-[60vh]"
    >
      <Frown className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-4xl font-bold font-serif mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
      <Button asChild>
        <Link to="/">Go Back Home</Link>
      </Button>
    </motion.div>
  );
}

export default NotFoundPage;
