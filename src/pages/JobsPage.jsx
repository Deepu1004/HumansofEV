
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Building, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from "@/lib/utils"; // Import cn

// Placeholder Input component if not already created
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
 return (
   <input
     type={type}
     className={cn(
       "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
       className
     )}
     ref={ref}
     {...props}
   />
 )
});
Input.displayName = "Input";


function JobsPage() {
   const jobListings = [
    { id: 1, title: "EV Battery Engineer", company: "FutureVolt Inc.", location: "Austin, TX", type: "Full-time", icon: Briefcase, imgKey: "battery_engineer_lab" },
    { id: 2, title: "Charging Network Technician", company: "ChargeGrid Solutions", location: "Remote (West Coast)", type: "Full-time", icon: MapPin, imgKey: "technician_working_on_charger" },
    { id: 3, title: "EV Sales Specialist", company: "GreenWheels Dealership", location: "Miami, FL", type: "Full-time", icon: Building, imgKey: "car_dealership_showroom" },
    { id: 4, title: "Software Developer (V2G Systems)", company: "GridSync Energy", location: "San Francisco, CA", type: "Full-time", icon: Briefcase, imgKey: "software_developer_coding" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <Button variant="ghost" asChild className="mb-6 text-muted-foreground">
         <Link to="/more"> {/* Assuming /more is the parent for Resources */}
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
         </Link>
       </Button>

      <h1 className="text-4xl font-bold font-serif text-center">Careers in the EV Industry</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Find your next opportunity in the rapidly growing world of electric vehicles.
      </p>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="p-4 md:flex md:items-center md:gap-4 space-y-4 md:space-y-0">
          <Input placeholder="Search job titles or keywords..." className="flex-grow" />
          <Input placeholder="Location (e.g., city, state, remote)" className="flex-grow" />
          <Button>
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </CardContent>
      </Card>


      {/* Job Listings */}
      <div className="space-y-4">
        {jobListings.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
             <CardContent className="p-4 flex items-start gap-4">
                <img  alt={job.company} class="w-16 h-16 object-contain rounded-md border p-1 hidden sm:block" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
               <div className="flex-grow">
                 <CardTitle className="text-lg">{job.title}</CardTitle>
                 <CardDescription className="flex items-center gap-x-4 gap-y-1 flex-wrap">
                   <span className="flex items-center gap-1"><Building className="h-4 w-4"/> {job.company}</span>
                   <span className="flex items-center gap-1"><MapPin className="h-4 w-4"/> {job.location}</span>
                   <span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/> {job.type}</span>
                 </CardDescription>
               </div>
               <Button variant="outline" size="sm" className="flex-shrink-0 ml-auto">View Job</Button>
             </CardContent>
          </Card>
        ))}
      </div>

       <div className="text-center mt-12">
         <Button>Load More Jobs</Button>
       </div>
    </motion.div>
  );
}

export default JobsPage;
