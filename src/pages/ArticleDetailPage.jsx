
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar.jsx';
import { CalendarDays, User, MessageSquare, ArrowLeft } from 'lucide-react';

// Placeholder data - In a real app, fetch this based on ID
const allArticles = Array.from({ length: 18 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Article Title Number ${i + 1}: Exploring EV Innovations Deep Dive`,
  excerpt: `This is a short excerpt for article ${i + 1}. It discusses the latest trends and developments in the electric vehicle industry, focusing on sustainability and performance improvements.`,
  date: `May ${30 - i}, 2025`,
  author: i % 3 === 0 ? "Admin" : (i % 3 === 1 ? "Divya Thakkar" : "Expert Contributor"),
  comments: Math.floor(Math.random() * 10),
  imgUrl: "https://images.unsplash.com/photo-1694388001616-1176f534d72f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", // Shared image for now
  content: `
    <p>This is the full content for **Article ${i + 1}**. Electric vehicles (EVs) represent a significant shift in the automotive industry, driven by environmental concerns and technological advancements. This article delves into the core aspects of this transformation.</p>
    <p>One of the primary drivers is the reduction of greenhouse gas emissions. Unlike internal combustion engine (ICE) vehicles, EVs produce zero tailpipe emissions, contributing to cleaner air, especially in urban areas. Governments worldwide are incentivizing EV adoption through subsidies, tax credits, and stricter emission regulations for traditional vehicles.</p>
    <img  class="my-6 rounded-lg shadow-md object-cover aspect-video" alt="Inside of a modern electric car dashboard" src="https://images.unsplash.com/photo-1553260188-75a8d6205b6c" />
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Technological Advancements</h2>
    <p>Battery technology is rapidly evolving. Lithium-ion batteries are becoming denser, allowing for longer ranges, and cheaper, making EVs more affordable. Research into solid-state batteries promises even greater energy density, faster charging, and improved safety.</p>
    <p>Charging infrastructure is also expanding. While home charging remains the most common method, the network of public fast chargers is growing, addressing range anxiety concerns for longer journeys. Innovations like wireless charging and battery swapping are also being explored.</p>
    <ul class="list-disc list-inside my-4 space-y-1 pl-4 text-foreground/80">
      <li>Increased range and efficiency.</li>
      <li>Faster charging capabilities.</li>
      <li>Development of autonomous driving features.</li>
      <li>Integration with smart grids (V2G technology).</li>
    </ul>
    <h2 class="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Market Trends</h2>
    <p>The market share of EVs is steadily increasing globally. Major automakers are committing billions to electrify their fleets, introducing a wider variety of models, from compact cars to SUVs and trucks. Startups continue to innovate, pushing the boundaries of design and technology.</p>
    <p>The transition is not without challenges, including sourcing raw materials for batteries ethically and sustainably, managing battery end-of-life, and ensuring the electrical grid can handle increased demand. However, the momentum towards an electric future appears irreversible.</p>
    <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
      "The shift to electric mobility is not just about changing cars; it's about rethinking our relationship with energy and transportation." - Industry Expert ${i+1}
    </blockquote>
    <p>In conclusion, the EV revolution is well underway, promising a cleaner, quieter, and potentially more exciting future for personal transportation. Continuous innovation and investment are key to overcoming the remaining hurdles.</p>
  `
}));

function ArticleDetailPage() {
  const { id } = useParams();
  const article = allArticles.find(a => a.id === id);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (!article) {
    return <div className="container py-8 text-center">Article not found.</div>;
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
          <Link to="/news/articles">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <main className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg border border-border/60 bg-card">
              <img 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
                src={article.imgUrl}
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl md:text-4xl font-bold font-serif text-primary">{article.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 flex-wrap">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
                  <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {article.comments} Comments</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4 prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-serif prose-a:text-secondary hover:prose-a:text-secondary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
                 <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </CardContent>
            </Card>
          </motion.div>

           {/* Placeholder for Comments Section */}
           <motion.div variants={itemVariants}>
            <Card className="bg-card border border-border/60">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Comments ({article.comments})</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comments feature coming soon...</p>
                {/* Add comment form and list here later */}
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

export default ArticleDetailPage;
