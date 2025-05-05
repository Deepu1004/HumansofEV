
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Ticket, Users, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { Pagination } from '@/components/ui/pagination';
import usePagination from '@/hooks/usePagination';

// Expanded placeholder data for pagination
const allEvents = Array.from({ length: 14 }, (_, i) => ({
  id: (i + 1).toString(), // Ensure ID is string
  name: `EV Event ${i + 1}: ${i % 3 === 0 ? 'Summit' : i % 3 === 1 ? 'Expo' : 'Meetup'}`,
  date: `2025-${String(10 + Math.floor(i / 5)).padStart(2, '0')}-${String(15 + (i % 5) * 2).padStart(2, '0')}`,
  location: i % 4 === 0 ? "Berlin, Germany" : i % 4 === 1 ? "Detroit, MI" : i % 4 === 2 ? "Bangkok, Thailand" : "Online",
  type: i % 3 === 0 ? "Conference" : i % 3 === 1 ? "Exhibition" : "Meetup",
  icon: i % 3 === 0 ? Users : i % 3 === 1 ? Ticket : MapPin,
  imgUrl: "https://images.unsplash.com/photo-1649190800807-6f1d42a4bc05" // Shared image
}));

const ITEMS_PER_PAGE = 4;

function EventsPage() {
  const { currentPage, totalPages, goToPage } = usePagination(allEvents.length, ITEMS_PER_PAGE);

  const currentEvents = allEvents.slice(
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
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-2">Upcoming EV Events</h1>
            <p className="text-lg text-muted-foreground">
              Find conferences, exhibitions, and community meetups in the EV world.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {currentEvents.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border border-border/60">
                  {/* Update div to Link for detail page */}
                  <Link to={`/news/events/${event.id}`} className="block md:flex items-start gap-4 group">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img  class="h-48 w-full object-cover md:rounded-l-lg md:rounded-r-none transition-transform duration-300 group-hover:scale-105" alt={event.name} src={event.imgUrl} />
                    </div>
                    <div className="p-4 md:p-4 md:w-2/3">
                       <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-0.5 rounded mb-2">{event.type}</span>
                      <h2 className="text-lg font-semibold font-serif mb-2 group-hover:text-primary transition-colors">{event.name}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 flex-wrap">
                        <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {event.date}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
                      </div>
                      {/* Button acts as visual cue, link handles navigation */}
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10" tabIndex={-1}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
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

export default EventsPage;
