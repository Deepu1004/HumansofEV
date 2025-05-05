
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUp, Facebook, Rss, Twitter } from 'lucide-react';

function Sidebar() {
  const popularNews = [
    { id: 1, title: "EV Sales Surge in Q1 2025", date: "May 1, 2025", imgKey: "ev_sales_chart_up" },
    { id: 2, title: "New Battery Tech Promises 500-Mile Range", date: "April 30, 2025", imgKey: "battery_icon_glowing" },
    { id: 3, title: "Autonomous EV Testing Expands", date: "April 29, 2025", imgKey: "autonomous_car_sensor_view" },
  ];

  const breakingNews = [
     { id: 4, title: "Govt Announces New Charging Infrastructure Fund", date: "May 2, 2025", imgKey: "government_building_flag" },
     { id: 5, title: "Major Automaker Unveils Electric Truck", date: "May 2, 2025", imgKey: "electric_truck_side_view" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <aside className="space-y-6">
      {/* Ad Placeholder 1 */}
      <div className="h-60 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shadow p-4 text-center border border-dashed">
        Advertisement Area (Portrait)
      </div>

      {/* Popular News */}
      <Card className="bg-card border-primary/20 shadow-sm">
        <CardHeader className="bg-primary/10 p-3">
          <CardTitle className="text-base font-semibold text-primary flex items-center gap-2">
            <Rss className="w-4 h-4" /> Popular News
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          {popularNews.map((item) => (
            <Link key={item.id} to="#" className="block group">
              <div className="flex items-start gap-3">
                <img  class="w-16 h-16 object-cover rounded flex-shrink-0 border" alt={item.title} src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

       {/* Social Follow */}
       <Card className="bg-card border-primary/20 shadow-sm">
         <CardHeader className="bg-primary/10 p-3">
           <CardTitle className="text-base font-semibold text-primary">Follow Us</CardTitle>
         </CardHeader>
         <CardContent className="p-4 flex justify-around">
            <Button variant="outline" size="icon" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              <Facebook className="h-5 w-5" />
            </Button>
             <Button variant="outline" size="icon" className="text-blue-400 border-blue-200 hover:bg-blue-50">
              <Twitter className="h-5 w-5" />
            </Button>
             <Button variant="outline" size="icon" className="text-orange-500 border-orange-200 hover:bg-orange-50">
              <Rss className="h-5 w-5" />
            </Button>
         </CardContent>
       </Card>


      {/* Breaking News */}
      <Card className="bg-card border-accent/20 shadow-sm">
        <CardHeader className="bg-accent/60 p-3">
          <CardTitle className="text-base font-semibold text-accent-foreground flex items-center gap-2">
            Breaking News
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          {breakingNews.map((item) => (
             <Link key={item.id} to="#" className="block group">
               <div className="flex items-start gap-3">
                 <img  class="w-16 h-16 object-cover rounded flex-shrink-0 border" alt={item.title} src="https://images.unsplash.com/photo-1662485732745-5a841bfe7f65" />
                 <div>
                   <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-1">{item.title}</p>
                   <p className="text-xs text-muted-foreground">{item.date}</p>
                 </div>
               </div>
             </Link>
          ))}
        </CardContent>
      </Card>

       {/* Ad Placeholder 2 */}
       <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shadow p-4 text-center border border-dashed">
         Advertisement Area
       </div>

       {/* Scroll to Top Button */}
       <Button
         variant="outline"
         size="icon"
         className="fixed bottom-6 right-6 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 z-50"
         onClick={scrollToTop}
         aria-label="Scroll to top"
       >
         <ArrowUp className="h-5 w-5" />
       </Button>
    </aside>
  );
}

export default Sidebar;
