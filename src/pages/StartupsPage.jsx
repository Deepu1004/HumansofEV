
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, User, MessageSquare, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { Pagination } from '@/components/ui/pagination';
import usePagination from '@/hooks/usePagination';

// Expanded placeholder data for pagination
const allStartups = Array.from({ length: 16 }, (_, i) => ({
  id: (i + 1).toString(), // Ensure ID is string
  name: `EV Startup ${String.fromCharCode(65 + i)}: Innovating Mobility`,
  excerpt: `Startup ${String.fromCharCode(65 + i)} is working on groundbreaking technology in the ${i % 4 === 0 ? 'charging infrastructure' : i % 4 === 1 ? 'battery management' : i % 4 === 2 ? 'fleet electrification' : 'micromobility'} space. Learn about their journey and impact.`,
  date: `April ${28 - i}, 2025`,
  author: i % 2 === 0 ? "Press Release" : "Interview",
  comments: Math.floor(Math.random() * 5),
  imgUrl: "https://images.unsplash.com/photo-1589829068083-7cbcc8f6eed4" // Shared image
}));

const ITEMS_PER_PAGE = 4;

function StartupsPage() {
  const { currentPage, totalPages, goToPage } = usePagination(allStartups.length, ITEMS_PER_PAGE);

  const currentStartups = allStartups.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-2">EV Startups Spotlight</h1>
            <p className="text-lg text-muted-foreground">
              Discover the innovators shaping the future of electric mobility and related tech.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {currentStartups.map((startup) => (
              <motion.div key={startup.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border border-border/60">
                  {/* Update Link to point to detail page */}
                  <Link to={`/news/startups/${startup.id}`} className="block md:flex items-start gap-4 group">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img  class="h-48 w-full object-cover md:rounded-l-lg md:rounded-r-none transition-transform duration-300 group-hover:scale-105" alt={startup.name} src={startup.imgUrl} />
                    </div>
                    <div className="p-4 md:p-4 md:w-2/3">
                      <h2 className="text-lg font-semibold font-serif mb-2 group-hover:text-primary transition-colors">{startup.name}</h2>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
                        <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {startup.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {startup.author}</span>
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {startup.comments} Comments</span>
                      </div>
                      <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{startup.excerpt}</p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-primary group-hover:underline" tabIndex={-1}>
                         Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
             <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={goToPage}
             />
          </motion.div>
        </main>

        {/* Sidebar Area */}
        <motion.div className="lg:col-span-1" variants={itemVariants}>
           <Sidebar />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StartupsPage;
