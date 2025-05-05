
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { ArrowLeft, CalendarDays, MapPin, Ticket, Users, ExternalLink, Clock } from 'lucide-react';

// Placeholder data
const allEvents = Array.from({ length: 14 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `EV Event ${i + 1}: ${i % 3 === 0 ? 'Global Summit' : i % 3 === 1 ? 'Future Mobility Expo' : 'Community Charge Meetup'}`,
  date: `2025-${String(10 + Math.floor(i / 5)).padStart(2, '0')}-${String(15 + (i % 5) * 2).padStart(2, '0')}`,
  time: `${9 + i}:00 AM - ${17 + i}:00 PM`,
  location: i % 4 === 0 ? "Berlin Convention Center, Germany" : i % 4 === 1 ? "Detroit Auto Show Hall, MI" : i % 4 === 2 ? "Queen Sirikit National Convention Center, Bangkok" : "Virtual / Online Platform",
  type: i % 3 === 0 ? "Conference" : i % 3 === 1 ? "Exhibition" : "Meetup",
  organizer: i % 2 === 0 ? "ElectroDrive Inc." : "Green Mobility Association",
  website: `https://event${i + 1}.ev`,
  imgUrl: "https://images.unsplash.com/photo-1649190800807-6f1d42a4bc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", // Shared image
  description: `
    <p>Join us for the **${`EV Event ${i + 1}: ${i % 3 === 0 ? 'Global Summit' : i % 3 === 1 ? 'Future Mobility Expo' : 'Community Charge Meetup'}`}**, a premier gathering for professionals and enthusiasts in the electric vehicle industry. This ${i % 3 === 0 ? 'conference' : i % 3 === 1 ? 'exhibition' : 'meetup'} brings together key players to discuss the latest trends, challenges, and opportunities in EV technology, infrastructure, and policy.</p>
    <img  class="my-6 rounded-lg shadow-md object-cover aspect-video" alt="Conference hall with audience" src="https://images.unsplash.com/photo-1696592185816-466513a27fe6" />
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Event Highlights</h2>
    <ul class="list-disc list-inside my-4 space-y-1 pl-4 text-foreground/80">
      <li>Keynote speeches from industry leaders.</li>
      <li>${i % 3 === 1 ? 'Exhibition floor showcasing latest EV models and technologies.' : 'Interactive panel discussions on charging infrastructure.'}</li>
      <li>Networking opportunities with peers and experts.</li>
      <li>${i % 3 === 0 ? 'Workshops on battery management systems.' : 'Live demonstrations of autonomous driving features.'}</li>
      <li>${i % 3 !== 2 ? 'Policy roundtables with government officials.' : 'Casual meet-and-greet with local EV owners.'}</li>
    </ul>
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Who Should Attend?</h2>
    <p>This event is ideal for engineers, policymakers, fleet managers, charging station operators, investors, researchers, students, and anyone passionate about the future of electric mobility. Whether you're looking to learn, network, or showcase your innovations, this event offers valuable opportunities.</p>
    <p>Organized by ${i % 2 === 0 ? "ElectroDrive Inc." : "Green Mobility Association"}, this event promises to be an informative and engaging experience. Register today to secure your spot!</p>
  `
}));

function EventDetailPage() {
  const { id } = useParams();
  const event = allEvents.find(e => e.id === id);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (!event) {
    return <div className="container py-8 text-center">Event not found.</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="container py-8"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary">
          <Link to="/news/events">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border border-border/60 bg-card">
               <img 
                 alt={event.name}
                 className="w-full h-64 md:h-80 object-cover"
                 src={event.imgUrl}
               />
              <CardHeader className="pb-4">
                 <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">{event.type}</span>
                 <CardTitle className="text-3xl md:text-4xl font-bold font-serif text-primary">{event.name}</CardTitle>
                 <CardDescription className="text-lg text-muted-foreground pt-1">Organized by {event.organizer}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                 <div className="space-y-3 text-foreground/90 mb-6 border-t border-b border-border/40 py-4">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                     <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                       <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                       <span>{event.location}</span>
                    </div>
                     <div className="flex items-start gap-3">
                       <ExternalLink className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                        <a href={event.website} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline truncate">
                          {event.website}
                        </a>
                    </div>
                 </div>

                 <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-serif prose-a:text-secondary hover:prose-a:text-secondary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
                   <div dangerouslySetInnerHTML={{ __html: event.description }} />
                 </div>

                 <div className="mt-8 flex gap-4">
                    <Button size="lg">Register Now <Ticket className="ml-2 h-5 w-5"/></Button>
                    <Button size="lg" variant="outline">Add to Calendar</Button>
                 </div>
              </CardContent>
            </Card>
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

export default EventDetailPage;
