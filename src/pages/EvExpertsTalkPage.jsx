
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

// Placeholder YouTube video data
const expertVideos = [
  { id: 'dQw4w9WgXcQ', title: 'Understanding Battery Degradation', speaker: 'Dr. Quantum' }, // Example ID
  { id: 'xvFZjo5PgG0', title: 'The Future of Autonomous EVs', speaker: 'Prof. Circuits' }, // Example ID
  { id: '86YLFOog4GM', title: 'EV Charging Infrastructure Challenges', speaker: 'Engineer Sparky' }, // Example ID
  { id: 'QH2-TGUlwu4', title: 'Consumer Adoption Trends in EVs', speaker: 'Analyst Volt' }, // Example ID
  { id: 'YQHsXMglC9A', title: 'Sustainable Materials in EV Manufacturing', speaker: 'Eco Warrior' }, // Example ID
  { id: 'u9prcUCHlqM', title: 'V2G Technology Explained Simply', speaker: 'Grid Master' }, // Example ID
];

function EvExpertsTalkPage() {
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
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-3">EV Experts Talk</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gain valuable insights from leading industry professionals, researchers, and analysts through these curated video talks.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {expertVideos.map((video) => (
          <motion.div key={video.id} variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border-transparent bg-gradient-to-br from-card via-card to-accent/10 hover:border-primary/30">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                    <PlayCircle className="w-16 h-16 text-white/80" />
                  </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold font-serif mb-1 text-foreground group-hover:text-primary transition-colors">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.speaker}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default EvExpertsTalkPage;
