
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ScrollText, Landmark, BadgePercent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


function EvPoliciesPage() {
  const policies = [
    { id: 1, title: "Federal EV Tax Credit Update", region: "USA", type: "Incentive", summary: "Details on the latest changes to federal tax credits for new and used EVs.", icon: BadgePercent, imgKey: "tax_form_illustration" },
    { id: 2, title: "EU Finalizes CO2 Emission Standards for 2035", region: "Europe", type: "Regulation", summary: "Overview of the new regulations phasing out internal combustion engine sales.", icon: ScrollText, imgKey: "eu_flag_graphic" },
    { id: 3, title: "California's Advanced Clean Cars II Rule", region: "USA (California)", type: "Regulation", summary: "Explaining the state's ambitious zero-emission vehicle mandate.", icon: Landmark, imgKey: "california_state_capitol" },
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

      <h1 className="text-4xl font-bold font-serif text-center">EV Policies & Regulations</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Understand the government incentives, mandates, and regulations shaping the EV landscape.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <Card key={policy.id} className="flex flex-col">
            <CardHeader>
              <img  alt={policy.title} class="w-full h-40 object-cover rounded-t-lg mb-4" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
              <div className="flex justify-between items-center">
                 <CardDescription className="font-semibold">{policy.region}</CardDescription>
                 <policy.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{policy.title}</CardTitle>
              <CardDescription>{policy.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-sm text-muted-foreground mb-4">{policy.summary}</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="text-center mt-12">
         <Button>Explore All Policies</Button>
       </div>
    </motion.div>
  );
}

export default EvPoliciesPage;
