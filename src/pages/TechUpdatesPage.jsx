
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Cpu, BatteryCharging, Wifi, TrendingUp, CalendarDays, Tag, ArrowRight } from 'lucide-react';
import Sidebar from '@/components/Sidebar.jsx';
import { Pagination } from '@/components/ui/pagination';
import usePagination from '@/hooks/usePagination';

// Expanded placeholder data for pagination
const allUpdates = Array.from({ length: 15 }, (_, i) => ({
  id: (i + 1).toString(), // Ensure ID is string
  title: `Tech Update ${i + 1}: ${i % 4 === 0 ? 'Battery Breakthrough' : i % 4 === 1 ? 'Software Enhancement' : i % 4 === 2 ? 'Motor Efficiency' : 'Charging Standard'}`,
  category: i % 4 === 0 ? "Batteries" : i % 4 === 1 ? "Software" : i % 4 === 2 ? "Powertrain" : "Charging",
  date: `2025-05-${String(2 + i).padStart(2, '0')}`,
  summary: `Details about the latest advancement in EV ${i % 4 === 0 ? 'battery density' : i % 4 === 1 ? 'autonomous driving software' : i % 4 === 2 ? 'electric motor design' : 'wireless charging technology'}. This update covers recent findings and potential market impact.`,
  icon: i % 4 === 0 ? BatteryCharging : i % 4 === 1 ? Wifi : i % 4 === 2 ? Cpu : TrendingUp,
  imgUrl: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" // Shared image
}));

const ITEMS_PER_PAGE = 5;

function TechUpdatesPage() {
  const { currentPage, totalPages, goToPage } = usePagination(allUpdates.length, ITEMS_PER_PAGE);

  const currentUpdates = allUpdates.slice(
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
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-2">Latest EV Tech Updates</h1>
            <p className="text-lg text-muted-foreground">
              Stay informed about the cutting-edge advancements in electric vehicle technology.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {currentUpdates.map((update) => (
              <motion.div key={update.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border border-border/60">
                  {/* Update Link to point to detail page */}
                  <Link to={`/tech-updates/${update.id}`} className="block md:flex items-start gap-4 group">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img  class="h-48 w-full object-cover md:rounded-l-lg md:rounded-r-none transition-transform duration-300 group-hover:scale-105" alt={update.title} src={update.imgUrl} />
                    </div>
                    <div className="p-4 md:p-4 md:w-2/3">
                       <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2 flex-wrap">
                         <span className="flex items-center gap-1 text-primary font-medium"><Tag className="w-3.5 h-3.5" /> {update.category}</span>
                         <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {update.date}</span>
                       </div>
                      <h2 className="text-lg font-semibold font-serif mb-2 group-hover:text-primary transition-colors">{update.title}</h2>
                      <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{update.summary}</p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-primary group-hover:underline" tabIndex={-1}>
                        Read Full Update <ArrowRight className="ml-1 h-4 w-4" />
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

export default TechUpdatesPage;
