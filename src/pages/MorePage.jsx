
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


function MorePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <h1 className="text-4xl font-bold font-serif text-center mb-8">More Resources</h1>
      <p className="text-center text-lg text-muted-foreground">
        Explore additional information related to Electric Vehicles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card>
          <CardHeader>
            <CardTitle>EV Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Learn about regulations and incentives.</p>
            <Button asChild variant="outline">
              <Link to="/more/ev-policies">View Policies</Link>
            </Button>
          </CardContent>
        </Card>
         {/* Add more cards here if needed later */}
        <Card className="bg-muted">
          <CardHeader>
             <CardTitle>Coming Soon</CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-muted-foreground mb-4">More resources will be added here.</p>
             <Button disabled variant="outline">Explore</Button>
           </CardContent>
        </Card>
      </div>
        <div className="bg-secondary p-6 rounded-lg mt-10 text-center">
         <h2 className="text-2xl font-semibold mb-3">Placeholder Information</h2>
         <p className="text-muted-foreground">This section will contain more links and resources.</p>
          <img  alt="Abstract network graphic" class="w-full max-w-xs mx-auto mt-4 opacity-80" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />
       </div>
    </motion.div>
  );
}

export default MorePage;
