
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, HelpCircle, TrendingUp, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


function EvForumsPage() {
  const forumSections = [
    { id: 1, title: "General Discussion", description: "Talk about anything EV related.", icon: MessageSquare, threads: 1250, posts: 15800, imgKey: "forum_general_chat_icon" },
    { id: 2, title: "Charging & Infrastructure", description: "Home charging, public networks, range anxiety.", icon: HelpCircle, threads: 800, posts: 9500, imgKey: "forum_charging_station_icon" },
    { id: 3, title: "Model Specific Talk", description: "Discuss particular EV models and brands.", icon: TrendingUp, threads: 2500, posts: 35000, imgKey: "forum_car_model_icon" },
    { id: 4, title: "Maintenance & Mods", description: "DIY, troubleshooting, and modifications.", icon: Wrench, threads: 600, posts: 7200, imgKey: "forum_wrench_icon" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
       <Button variant="ghost" asChild className="mb-6 text-muted-foreground">
         <Link to="/more"> {/* Assuming /more is the parent for Resources */}
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
         </Link>
       </Button>

      <h1 className="text-4xl font-bold font-serif text-center">EV Community Forums</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Connect with fellow EV enthusiasts, ask questions, share experiences, and find solutions.
      </p>

      <div className="space-y-4">
        {forumSections.map((section) => (
          <Card key={section.id} className="hover:bg-accent/50 transition-colors">
             <Link to="#" className="block p-4"> {/* Link to actual forum section */}
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-secondary rounded-lg">
                    <section.icon className="h-6 w-6 text-primary" />
                    {/* Consider replacing icon with img-replace if desired */}
                    {/* <img  alt={section.title} class="h-8 w-8" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" /> */}
                 </div>

                <div className="flex-grow">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground hidden sm:block">
                   <p>Threads: {section.threads.toLocaleString()}</p>
                   <p>Posts: {section.posts.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>

       <div className="text-center mt-12">
         <Button size="lg">Join the Conversation!</Button>
         <p className="text-xs text-muted-foreground mt-2">(Forum functionality requires integration)</p>
       </div>
    </motion.div>
  );
}

export default EvForumsPage;
