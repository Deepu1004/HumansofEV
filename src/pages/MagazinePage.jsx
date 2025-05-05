
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookMarked, Zap, ArrowRight } from 'lucide-react';

function MagazinePage() {
  const featuredIssue = {
    title: "The Charging Revolution Issue",
    description: "Exploring the future of EV charging infrastructure, V2G technology, and user experiences.",
    coverImageKey: "magazine_cover_charging_theme",
    articles: [
      { title: "Beyond the Pump: The New Era of Refueling", snippet:"How charging networks are evolving...", link:"#" },
      { title: "Vehicle-to-Grid: Powering Homes with Cars", snippet:"Unlocking the potential of bidirectional charging...", link:"#" },
      { title: "Charging Etiquette: The Unwritten Rules", snippet:"Navigating public charging stations politely...", link:"#" },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif mb-2">Humans of EV Magazine</h1>
        <p className="text-lg text-muted-foreground">
          In-depth features, interviews, and insights into the world of electric mobility.
        </p>
      </div>

      <Card className="overflow-hidden shadow-lg border-primary border-2">
         <div className="md:flex">
           <div className="md:w-1/3 p-4 flex items-center justify-center">
             <img  alt="Magazine Cover" class="rounded-md shadow-md max-h-80 object-contain" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
           </div>
           <div className="md:w-2/3">
            <CardHeader>
              <CardDescription className="text-primary font-semibold">Featured Issue</CardDescription>
              <CardTitle className="text-3xl font-serif">{featuredIssue.title}</CardTitle>
              <CardDescription>{featuredIssue.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">Inside this issue:</h3>
              <ul className="space-y-3">
                {featuredIssue.articles.map((article, index) => (
                   <li key={index} className="flex items-start gap-2">
                     <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                     <div>
                       <a href={article.link} className="font-medium hover:underline">{article.title}</a>
                       <p className="text-sm text-muted-foreground">{article.snippet}</p>
                     </div>
                   </li>
                 ))}
              </ul>
              <Button className="mt-6">
                Read Full Issue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore Past Issues</h2>
        <p className="text-muted-foreground mb-4">Browse our archive of digital magazines.</p>
         <img  alt="Archive illustration" class="w-full max-w-sm mx-auto rounded-lg opacity-70" src="https://images.unsplash.com/photo-1654892968823-ea564870a96f" />
        <Button variant="outline" className="mt-4">View Archive</Button>
      </div>
    </motion.div>
  );
}

export default MagazinePage;
