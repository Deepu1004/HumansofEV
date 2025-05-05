
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { Newspaper, Lightbulb, Calendar, ArrowRight } from 'lucide-react';

const newsCategories = [
  {
    title: "Articles",
    description: "In-depth analysis, reports, and features on the evolving world of electric vehicles.",
    link: "/news/articles",
    icon: Newspaper,
    imgKey: "news_articles_icon",
  },
  {
    title: "Startups",
    description: "Discover the innovative companies and entrepreneurs driving the future of EV technology.",
    link: "/news/startups",
    icon: Lightbulb,
    imgKey: "news_startups_icon",
  },
  {
    title: "Events",
    description: "Stay informed about upcoming EV conferences, expos, meetups, and webinars.",
    link: "/news/events",
    icon: Calendar,
    imgKey: "news_events_icon",
  },
];

function NewsPage() {
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
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-2">News Hub</h1>
            <p className="text-lg text-muted-foreground">
              Your central source for everything happening in the electric vehicle landscape.
            </p>
          </motion.div>

           {/* Featured News Placeholder */}
           <motion.div variants={itemVariants}>
             <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20 overflow-hidden shadow-md">
               <div className="md:flex">
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <span className="text-xs uppercase font-semibold text-secondary tracking-wider mb-1">Featured</span>
                    <h2 className="text-2xl font-semibold font-serif mb-3">Major EV Policy Changes Announced</h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">New government initiatives aim to accelerate EV adoption with expanded credits and charging infrastructure funding. Explore the details...</p>
                    <Button asChild size="sm">
                      <Link to="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                     <img  className="h-48 w-full object-cover md:h-full" alt="Government building with electric car charging station" src="https://images.unsplash.com/photo-1580140184098-dd46a735c4d6" />
                  </div>
               </div>
             </Card>
           </motion.div>

          {/* News Categories */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          >
            {newsCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 group bg-card border-border/60">
                  <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                       <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-serif">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <CardDescription className="mb-4 text-foreground/80">{category.description}</CardDescription>
                  </CardContent>
                   <div className="p-4 pt-0 mt-auto">
                     <Button asChild variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                       <Link to={category.link}>Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                   </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

           {/* Additional Content / Placeholder */}
           <motion.div variants={itemVariants}>
              <Card className="bg-muted/50 p-6 rounded-lg border border-dashed border-border/40">
                 <h2 className="text-xl font-semibold mb-3 text-center text-muted-foreground">More Content Coming Soon</h2>
                 <img  alt="Abstract wires and connections" class="w-full max-w-xs mx-auto rounded-lg opacity-60 mt-4" src="https://images.unsplash.com/photo-1606765962213-6fb8ef0a10e3" />
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

export default NewsPage;
