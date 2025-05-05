
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { ArrowLeft, Building, CalendarDays, Link as LinkIcon, Users, Zap } from 'lucide-react';

// Placeholder data
const allStartups = Array.from({ length: 16 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `EV Startup ${String.fromCharCode(65 + i)}: Innovating Mobility`,
  tagline: `Revolutionizing ${i % 4 === 0 ? 'Charging Solutions' : i % 4 === 1 ? 'Battery Intelligence' : i % 4 === 2 ? 'Fleet Electrification' : 'Urban Micromobility'}`,
  founded: 2020 + (i % 4),
  founders: [`Founder ${i+1}-A`, `Founder ${i+1}-B`],
  website: `https://startup${String.fromCharCode(65 + i)}.ev`,
  location: i % 3 === 0 ? "Silicon Valley, CA" : i % 3 === 1 ? "Austin, TX" : "Munich, Germany",
  category: i % 4 === 0 ? 'Charging Infrastructure' : i % 4 === 1 ? 'Battery Management' : i % 4 === 2 ? 'Fleet Electrification' : 'Micromobility',
  imgUrl: "https://images.unsplash.com/photo-1589829068083-7cbcc8f6eed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", // Shared image
  description: `
    <p><strong>Startup ${String.fromCharCode(65 + i)}</strong> is a dynamic force in the EV space, focusing on pioneering advancements in ${i % 4 === 0 ? 'smart charging networks' : i % 4 === 1 ? 'AI-driven battery analytics' : i % 4 === 2 ? 'optimizing electric fleet operations' : 'sustainable last-mile delivery solutions'}. Founded in ${2020 + (i % 4)}, the company aims to address critical challenges in the transition to electric mobility.</p>
    <img  class="my-6 rounded-lg shadow-md object-cover aspect-video" alt="Team working in modern office" src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378" />
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Our Vision</h2>
    <p>Our vision is to accelerate the world's transition to sustainable transportation by providing innovative and reliable ${i % 4 === 0 ? 'charging infrastructure' : i % 4 === 1 ? 'battery lifecycle management tools' : i % 4 === 2 ? 'fleet electrification platforms' : 'electric micromobility options'}. We believe in a future where electric mobility is accessible, efficient, and seamlessly integrated into daily life.</p>
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Key Technologies</h2>
    <ul class="list-disc list-inside my-4 space-y-1 pl-4 text-foreground/80">
      <li>Proprietary ${i % 4 === 0 ? 'load balancing algorithm' : i % 4 === 1 ? 'predictive maintenance model' : i % 4 === 2 ? 'route optimization software' : 'dockless charging system'}.</li>
      <li>User-friendly mobile application for seamless interaction.</li>
      <li>Scalable cloud platform for data analysis and management.</li>
      <li>Integration with renewable energy sources.</li>
    </ul>
    <p>Located in ${i % 3 === 0 ? "Silicon Valley, CA" : i % 3 === 1 ? "Austin, TX" : "Munich, Germany"}, our team is comprised of passionate engineers, designers, and business professionals dedicated to making a positive impact. We are actively seeking partnerships and investments to further our mission.</p>
  `
}));

function StartupDetailPage() {
  const { id } = useParams();
  const startup = allStartups.find(s => s.id === id);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (!startup) {
    return <div className="container py-8 text-center">Startup not found.</div>;
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
          <Link to="/news/startups">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Startups
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border border-border/60 bg-card">
               <div className="relative">
                 <img 
                   alt={startup.name}
                   className="w-full h-64 md:h-80 object-cover"
                   src={startup.imgUrl}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded mb-2">{startup.category}</span>
                    <CardTitle className="text-3xl md:text-4xl font-bold font-serif text-white shadow-sm">{startup.name}</CardTitle>
                    <CardDescription className="text-lg text-primary-foreground/90 mt-1">{startup.tagline}</CardDescription>
                  </div>
               </div>

              <CardContent className="pt-6">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm text-center">
                    <div className="flex flex-col items-center p-2 rounded bg-muted/50">
                      <CalendarDays className="w-5 h-5 mb-1 text-primary" />
                      <span className="font-semibold">Founded</span>
                      <span className="text-muted-foreground">{startup.founded}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded bg-muted/50">
                      <Building className="w-5 h-5 mb-1 text-primary" />
                      <span className="font-semibold">Location</span>
                      <span className="text-muted-foreground">{startup.location}</span>
                    </div>
                     <div className="flex flex-col items-center p-2 rounded bg-muted/50">
                      <Users className="w-5 h-5 mb-1 text-primary" />
                      <span className="font-semibold">Founders</span>
                      <span className="text-muted-foreground truncate">{startup.founders.join(', ')}</span>
                    </div>
                     <div className="flex flex-col items-center p-2 rounded bg-muted/50 hover:bg-accent/30">
                        <a href={startup.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full">
                         <LinkIcon className="w-5 h-5 mb-1 text-primary" />
                         <span className="font-semibold">Website</span>
                         <span className="text-secondary underline truncate">{new URL(startup.website).hostname}</span>
                        </a>
                    </div>
                  </div>

                 <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-serif prose-a:text-secondary hover:prose-a:text-secondary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
                   <div dangerouslySetInnerHTML={{ __html: startup.description }} />
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

export default StartupDetailPage;
