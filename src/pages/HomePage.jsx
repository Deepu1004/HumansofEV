
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Tag, MessageSquare, CalendarDays, Clock } from 'lucide-react';

// Placeholder data based on OCR/Image description
const headlines = [
  "FlixBus and Vertelo to Deploy 500 Electric Intercity Buses Across India",
  "Ampinity Energy and Hyphen SCS Announce Strategic Partnership",
  "Zypp Electric Achieves 50% Revenue Growth, Eyes Profitability",
  "Stellantis to Launch Leapmotor Electric Vehicles in India",
  "MG to Launch Windsor EV with Larger Battery and Enhanced Features",
  "Government Boosts EV Growth by Slashing Subsidy Disbursal Time",
  "Mercury EV-Tech Strengthens Board Leadership",
  "Mahindra & Mahindra to Acquire 58.96% Stake in SML Isuzu Ltd",
  "Hyundai Motor Group Collaborates with IIT Delhi",
];

const articles = [
  { id: 1, title: "How EVs Are Saving Food Delivery Companies Big Bucks!", imgKey: "food_delivery_ev_scooter" },
  { id: 2, title: "The Rise of Electric Cabs in India", imgKey: "electric_taxi_india" },
  { id: 3, title: "Energy Consumption & CO2 Emission Report from Commercial Buses", imgKey: "electric_bus_data_chart" },
];

const startups = [
  { id: 1, title: "Nuveen Invests USD 13.5 Million in Fabric to Advance Smart EV Fleet Infrastructure", date: "April 25, 2025", comments: 0, imgKey: "fabric_startup_team" },
  { id: 2, title: "Innovation from the Ground Up: How Gaurav Lohia Built TOBOR, India's Homegrown EV Charging Solution", date: "February 28, 2025", comments: 0, imgKey: "tobor_charging_station" },
  { id: 3, title: "Zypp Electric Appoints Parag Raheja as Executive Vice President", date: "January 22, 2025", comments: 0, imgKey: "zypp_electric_evp" },
  { id: 4, title: "India Launches Its First Electric Tractor: A Leap Towards Sustainable Agriculture", date: "Date Placeholder", comments: 0, imgKey: "electric_tractor_india" },
];

function HomePage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <motion.div
        className="bg-primary text-primary-foreground p-3 text-center rounded-md shadow font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        How EVs Are Saving Food Delivery Companies Big Bucks!
      </motion.div>

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
          <Tabs defaultValue="headlines" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-accent/50">
              <TabsTrigger value="headlines"><BookOpen className="w-4 h-4" /></TabsTrigger>
              <TabsTrigger value="tags"><Tag className="w-4 h-4" /></TabsTrigger>
              <TabsTrigger value="comments"><MessageSquare className="w-4 h-4" /></TabsTrigger>
            </TabsList>
            <TabsContent value="headlines" className="mt-4">
              <Card className="bg-card">
                <CardContent className="p-4 space-y-3">
                  {headlines.map((headline, index) => (
                    <Link key={index} to="#" className="block text-sm font-medium text-foreground hover:text-primary transition-colors pb-3 border-b last:border-b-0">
                      {headline}
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
             <TabsContent value="tags" className="mt-4">
               <Card className="bg-card"><CardContent className="p-4"><p className="text-muted-foreground text-sm">Tags section placeholder.</p></CardContent></Card>
             </TabsContent>
             <TabsContent value="comments" className="mt-4">
               <Card className="bg-card"><CardContent className="p-4"><p className="text-muted-foreground text-sm">Comments section placeholder.</p></CardContent></Card>
             </TabsContent>
          </Tabs>
        </motion.div>

        {/* Center Column */}
        <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
          <h2 className="text-xl font-bold text-primary border-b-2 border-primary pb-1">EV ARTICLES</h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
                <Link to="#">
                  <img  class="w-full h-40 object-cover" alt={article.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-base font-semibold leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>

          {/* Ad Placeholder 1 (Landscape) */}
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shadow p-4 text-center">
            Ad Area: Electric Scooter of the Year (Large Banner)
             <img  class="w-full h-full object-contain mt-2" alt="Electric Scooter Ad" src="https://images.unsplash.com/photo-1605106483404-0f722ef14df5" />
          </div>

          {/* Spotlight Section */}
           <Card className="overflow-hidden bg-card">
             <CardHeader className="bg-accent/60 p-2 px-4">
               <CardTitle className="text-sm font-semibold text-accent-foreground">IN THE SPOTLIGHT</CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <img  class="w-full aspect-video object-cover" alt="Spotlight video thumbnail" src="https://images.unsplash.com/photo-1587757706022-ab9d8ccf2648" />
             </CardContent>
           </Card>

           {/* Ad Placeholder 2 (Landscape) */}
           <div className="h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shadow">
             Landscape Ad Area (e.g., 728x90)
           </div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
           {/* Ad Placeholder 3 (Portrait/Large Banner) */}
           <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shadow p-4 text-center">
             Ad Area: Electric Scooter of the Year (Top Right Banner)
             <img  class="w-full h-full object-contain mt-2" alt="Electric Scooter Ad" src="https://images.unsplash.com/photo-1560682234-725f407fa5d5" />
           </div>

          <h2 className="text-xl font-bold text-primary border-b-2 border-primary pb-1">EV START-UPS</h2>
          <div className="space-y-4">
            {startups.map((startup) => (
              <Card key={startup.id} className="hover:shadow-md transition-shadow duration-300 bg-card">
                <Link to="#" className="flex items-start gap-3 p-3">
                  <img  class="w-16 h-16 object-cover rounded flex-shrink-0 mt-1 border" alt={startup.title} src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c" />
                  <div className="flex-grow">
                    <p className="text-sm font-semibold leading-snug mb-1">{startup.title}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {startup.date}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {startup.comments} Comments</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
           {/* Optional: Add a scroll-up button if needed */}
           {/* <Button variant="outline" size="icon" className="fixed bottom-6 right-6 rounded-full shadow-lg"> <ArrowUp className="h-4 w-4" /> </Button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
