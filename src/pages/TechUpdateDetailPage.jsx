
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { ArrowLeft, CalendarDays, Tag, Cpu, BatteryCharging, Wifi, TrendingUp, Share2, Bookmark } from 'lucide-react';

// Placeholder data
const allUpdates = Array.from({ length: 15 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Tech Update ${i + 1}: ${i % 4 === 0 ? 'Solid-State Battery Breakthrough' : i % 4 === 1 ? 'Level 4 Autonomy Software Update' : i % 4 === 2 ? 'Next-Gen Axial Flux Motor Revealed' : 'Bi-Directional Charging Standard Finalized'}`,
  category: i % 4 === 0 ? "Batteries" : i % 4 === 1 ? "Software & Autonomy" : i % 4 === 2 ? "Powertrain" : "Charging & Infrastructure",
  date: `2025-05-${String(2 + i).padStart(2, '0')}`,
  source: i % 3 === 0 ? "TechCrunch Mobility" : i % 3 === 1 ? "Research Journal of Energy" : "Company Press Release",
  imgUrl: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", // Shared image
  icon: i % 4 === 0 ? BatteryCharging : i % 4 === 1 ? Wifi : i % 4 === 2 ? Cpu : TrendingUp,
  content: `
    <p>This technical update covers a significant development in the field of **${i % 4 === 0 ? 'Solid-State Batteries' : i % 4 === 1 ? 'Level 4 Autonomous Driving Software' : i % 4 === 2 ? 'Axial Flux Electric Motors' : 'Bi-Directional Charging (V2G)'}**. Reported by ${i % 3 === 0 ? "TechCrunch Mobility" : i % 3 === 1 ? "the Research Journal of Energy" : "a leading manufacturer"}, this advancement could reshape the electric vehicle landscape.</p>
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Key Findings / Features</h2>
    <img  class="my-6 rounded-lg shadow-md object-cover aspect-video" alt="Close-up of circuit board" src="https://images.unsplash.com/photo-1518180222741-f6b9194dcea3" />
    <p>The core innovation lies in ${i % 4 === 0 ? 'a new solid electrolyte material that increases energy density by 30% and improves safety' : i % 4 === 1 ? 'an enhanced sensor fusion algorithm combined with improved predictive path planning for complex urban environments' : i % 4 === 2 ? 'a compact axial flux motor design offering significantly higher power density and efficiency compared to traditional radial flux motors' : 'a standardized communication protocol enabling seamless bi-directional power flow between EVs and the grid'}.</p>
    <ul class="list-disc list-inside my-4 space-y-1 pl-4 text-foreground/80">
      <li>${i % 4 === 0 ? 'Potential for 600+ mile range EVs.' : i % 4 === 1 ? 'Improved performance in adverse weather conditions.' : i % 4 === 2 ? 'Reduced motor weight and size.' : 'Grid stabilization and potential revenue for EV owners.'}</li>
      <li>${i % 4 === 0 ? 'Faster charging rates possible.' : i % 4 === 1 ? 'Smoother and more human-like driving behavior.' : i % 4 === 2 ? 'Higher peak torque output.' : 'Standardized hardware requirements for chargers and vehicles.'}</li>
      <li>${i % 4 === 0 ? 'Enhanced thermal stability, reducing fire risk.' : i % 4 === 1 ? 'Expanded operational design domain (ODD).' : i % 4 === 2 ? 'Lower manufacturing costs due to simpler construction.' : 'Interoperability across different brands.'}</li>
    </ul>
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Implications</h2>
    <p>This ${i % 4 === 0 ? 'battery breakthrough' : i % 4 === 1 ? 'software update' : i % 4 === 2 ? 'motor technology' : 'charging standard'} has significant implications. ${i % 4 === 0 ? 'It could drastically reduce range anxiety and make EVs more competitive with gasoline cars.' : i % 4 === 1 ? 'It marks a major step towards fully autonomous ride-sharing services and personal vehicles.' : i % 4 === 2 ? 'It enables lighter, more agile electric vehicles with better performance, particularly in sports cars and aircraft.' : 'It unlocks the potential for EVs to act as distributed energy resources, supporting grid stability and integrating more renewables.'}</p>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
      "We are entering a new phase of EV innovation where fundamental components are being reimagined." - Lead Researcher ${i+1}
    </blockquote>
    <p>While commercial implementation might still be a few years away (or is rolling out now for software/standards), this development highlights the rapid pace of innovation in the EV sector. Further testing and scaling are required, but the potential impact is undeniable.</p>
  `
}));


function TechUpdateDetailPage() {
  const { id } = useParams();
  const update = allUpdates.find(u => u.id === id);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (!update) {
    return <div className="container py-8 text-center">Tech Update not found.</div>;
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
          <Link to="/tech-updates">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tech Updates
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border border-border/60 bg-card">
              <CardHeader className="pb-4 border-b border-border/40">
                 <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                        <Tag className="w-3.5 h-3.5" /> {update.category}
                      </span>
                      <CardTitle className="text-3xl md:text-4xl font-bold font-serif text-primary leading-tight">{update.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 flex-wrap">
                        <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {update.date}</span>
                        <span className="font-medium">Source:</span>
                        <span>{update.source}</span>
                      </div>
                    </div>
                     <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-br from-accent/50 to-secondary/30 text-primary">
                        <update.icon className="w-8 h-8" />
                     </div>
                 </div>
              </CardHeader>
              <CardContent className="pt-6">
                 <img 
                   alt={`Visual representation for ${update.title}`}
                   className="w-full h-64 md:h-80 object-cover rounded-lg mb-6 shadow-md"
                   src={update.imgUrl}
                 />

                 <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-serif prose-a:text-secondary hover:prose-a:text-secondary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
                   <div dangerouslySetInnerHTML={{ __html: update.content }} />
                 </div>

                 <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Found this update helpful?</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share</span>
                        </Button>
                         <Button variant="outline" size="icon">
                            <Bookmark className="h-4 w-4" />
                             <span className="sr-only">Bookmark</span>
                        </Button>
                    </div>
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

export default TechUpdateDetailPage;
