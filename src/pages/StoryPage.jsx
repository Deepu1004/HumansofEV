
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx'; // Assuming you might want a sidebar here too
import { ArrowLeft, User, CalendarDays } from 'lucide-react';

// Function to simulate fetching data based on ID (replace with actual fetch later)
const getStoryById = (id) => {
  const stories = JSON.parse(localStorage.getItem('evStories') || '[]');
  return stories.find(story => story.id === id);
};


function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    const fetchedStory = getStoryById(id);
    setStory(fetchedStory);
    setLoading(false);
  }, [id]);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (loading) {
    return <div className="container py-8 text-center">Loading story...</div>;
  }

  if (!story) {
    return <div className="container py-8 text-center">Story not found.</div>;
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
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border border-border/60 bg-card">
               <img 
                 alt={`Image for ${story.title}`}
                 className="w-full h-64 md:h-96 object-cover"
                src={`https://images.unsplash.com/photo-1675023112817-52b789fd2ef0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${story.id}`} // Example dynamic image based on ID
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl md:text-4xl font-bold font-serif text-primary">{story.title}</CardTitle>
                 <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> By {story.author}</span>
                    {/* Add date if available in your data */}
                    {/* <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {story.date}</span> */}
                 </div>
              </CardHeader>
              <CardContent className="pt-4 prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-serif prose-a:text-secondary hover:prose-a:text-secondary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground story-content">
                {/* Assume story.fullText might contain basic HTML or needs parsing */}
                <p>{story.fullText}</p>
                 {/* If fullText is HTML, use: */}
                 {/* <div dangerouslySetInnerHTML={{ __html: story.fullText }} /> */}
              </CardContent>
            </Card>
          </motion.div>
        </main>

        {/* Sidebar Area (Optional for story page) */}
        <motion.div className="lg:col-span-1" variants={itemVariants}>
           <Sidebar />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StoryPage;
