
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function StoryCard({ story }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full flex flex-col"
    >
      <Card className="flex flex-col flex-grow overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="aspect-video overflow-hidden">
           <img 
             alt={`Image for ${story.title}`}
             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
        </div>
        <CardHeader>
          <CardTitle className="text-lg font-serif leading-tight">{story.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{story.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="link" className="p-0 h-auto text-primary">
            <Link to={`/story/${story.id}`}>
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default StoryCard;
