
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import StoryPage from '@/pages/StoryPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Import News & Category Pages
import NewsPage from '@/pages/NewsPage';
import ArticlesPage from '@/pages/ArticlesPage';
import StartupsPage from '@/pages/StartupsPage';
import EventsPage from '@/pages/EventsPage';
import TechUpdatesPage from '@/pages/TechUpdatesPage';

// Import Detail Pages
import ArticleDetailPage from '@/pages/ArticleDetailPage';
import StartupDetailPage from '@/pages/StartupDetailPage';
import EventDetailPage from '@/pages/EventDetailPage';
import TechUpdateDetailPage from '@/pages/TechUpdateDetailPage';

// Import Other Main Pages
import MagazinePage from '@/pages/MagazinePage';
import EvPoliciesPage from '@/pages/EvPoliciesPage';
import EvExpertsTalkPage from '@/pages/EvExpertsTalkPage';
import EvForumsPage from '@/pages/EvForumsPage';
import JobsPage from '@/pages/JobsPage';
import ContactUsPage from '@/pages/ContactUsPage';
import MorePage from '@/pages/MorePage'; // Keep if Resources dropdown links here


// Dummy data for stories - Stays for HomePage & StoryPage
const stories = [
  { id: '1', title: 'Charging Across the Rockies', excerpt: 'My journey driving an EV through challenging mountain terrains.', author: 'Alex Johnson', imageUrl: 'mountain_road', fullText: 'Driving through the Rockies in my new EV was an experience unlike any other. The quiet hum of the electric motor against the backdrop of vast mountain ranges was surreal. Range anxiety was a concern, but careful planning and the growing charging infrastructure made it possible. We stopped at scenic overlooks, charged up in small towns, and met fellow EV enthusiasts along the way. It wasn\'t just a road trip; it was a testament to how far electric mobility has come. The torque on steep inclines was impressive, handling hairpin turns with ease. This journey solidified my belief in the future of sustainable travel.' },
  { id: '2', title: 'City Commuting Made Silent', excerpt: 'How my electric car transformed my daily drive in the bustling city.', author: 'Maria Garcia', imageUrl: 'city_street_night', fullText: 'Switching to an EV for my daily commute in the city was the best decision I\'ve made. Gone are the noisy engine rumbles and frequent gas station stops. My mornings are calmer, gliding through traffic almost silently. Regenerative braking is a game-changer in stop-and-go traffic, adding miles back to the battery. Finding charging spots near my workplace is easy now, and the cost savings on fuel and maintenance are significant. Plus, knowing I\'m reducing my carbon footprint makes every drive feel good. The instant acceleration makes merging onto highways effortless. It\'s not just transport; it\'s a smarter way to navigate urban life.' },
  { id: '3', title: 'Family Adventures Powered by Electricity', excerpt: 'Taking the family on road trips with zero emissions.', author: 'David Chen', imageUrl: 'family_by_car_coast', fullText: 'Our family loves road trips, and going electric added a new dimension to our adventures. The spacious interior of our EV SUV fits everyone comfortably, along with all our gear. Planning routes involves checking charging networks, which has become part of the fun, discovering new places while we recharge. The kids love the quiet ride and the large infotainment screen. We\'ve driven to national parks, coastal towns, and visited relatives, all without using a drop of gasoline. It feels great teaching our children about sustainability through practical experience. The panoramic sunroof offers amazing views, making the journey as enjoyable as the destination.' },
  { id: '4', title: 'From Skeptic to EV Advocate', excerpt: 'My initial doubts about EVs and how I became a true believer.', author: 'Sarah Jenkins', imageUrl: 'woman_charging_ev', fullText: 'I admit, I was skeptical about electric cars. Range anxiety, charging times, battery life – the concerns were many. But after test-driving a friend\'s EV, I was intrigued. The smooth acceleration and quiet operation were impressive. I did extensive research, talked to owners, and finally took the plunge. Months later, I\'m a complete convert. Charging at home overnight is incredibly convenient. Public charging infrastructure is better than I expected. The performance exceeded my expectations, and the environmental benefits are undeniable. I now find myself passionately advocating for EVs to friends and family, sharing my positive experience.' },
   { id: '5', title: 'The Long Haul: EV Roadtrip Tales', excerpt: 'Crossing state lines and discovering the capabilities of electric travel.', author: 'Kenichi Tanaka', imageUrl: 'ev_on_highway_sunset', fullText: 'Embarking on a cross-country road trip in an EV felt like pioneering a new way to travel. Planning was key, mapping out charging stops using various apps. We experienced the efficiency of fast chargers and the slower pace of Level 2 chargers at hotels. Each stop was an opportunity to explore a new town or landmark. The car performed flawlessly, handling highways and backroads with equal competence. We tracked our energy consumption, marveling at the low cost compared to gasoline. This trip proved that long-distance EV travel is not just possible, but enjoyable and sustainable.' },
   { id: '6', title: 'EV Ownership in a Rural Area', excerpt: 'Navigating the challenges and rewards of electric driving outside the city.', author: 'Emily White', imageUrl: 'ev_countryside_farm', fullText: 'Living in a rural area, I wondered if an EV would be practical. Public chargers are less frequent here. However, home charging covers most of my daily needs. For longer trips, careful planning is essential, but it\'s manageable. The instant torque is fantastic on hilly country roads. The quiet operation lets me appreciate the sounds of nature during my drives. While the initial investment was higher, the savings on fuel and maintenance, plus the satisfaction of driving sustainably, make it worthwhile. My EV handles dirt roads surprisingly well, and the local community is becoming increasingly curious and supportive of electric mobility.' },
];


function App() {
  const location = useLocation();

  // Store initial stories in localStorage if not already there
  React.useEffect(() => {
    if (!localStorage.getItem('evStories')) {
      localStorage.setItem('evStories', JSON.stringify(stories));
    }
  }, []);

  // This data is passed to HomePage, but detail pages will fetch their own simulated data
  const allStories = JSON.parse(localStorage.getItem('evStories') || '[]');

  const pageTransition = {
     initial: { opacity: 0, y: 10 },
     animate: { opacity: 1, y: 0 },
     exit: { opacity: 0, y: -10 },
     transition: { duration: 0.3, ease: "easeInOut" }
   };


  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home and Story */}
          <Route
            index
            element={
              <motion.div {...pageTransition}>
                <HomePage stories={allStories} />
              </motion.div>
            }
          />
          <Route
            path="/story/:id"
            element={
              <motion.div {...pageTransition}>
                <StoryPage />
              </motion.div>
             }
          />

           {/* News Hub and List Pages */}
          <Route path="/news" element={<motion.div {...pageTransition}><NewsPage /></motion.div>} />
          <Route path="/news/articles" element={<motion.div {...pageTransition}><ArticlesPage /></motion.div>} />
          <Route path="/news/startups" element={<motion.div {...pageTransition}><StartupsPage /></motion.div>} />
          <Route path="/news/events" element={<motion.div {...pageTransition}><EventsPage /></motion.div>} />
          <Route path="/tech-updates" element={<motion.div {...pageTransition}><TechUpdatesPage /></motion.div>} />

          {/* Detail Pages */}
          <Route path="/news/articles/:id" element={<motion.div {...pageTransition}><ArticleDetailPage /></motion.div>} />
          <Route path="/news/startups/:id" element={<motion.div {...pageTransition}><StartupDetailPage /></motion.div>} />
          <Route path="/news/events/:id" element={<motion.div {...pageTransition}><EventDetailPage /></motion.div>} />
          <Route path="/tech-updates/:id" element={<motion.div {...pageTransition}><TechUpdateDetailPage /></motion.div>} />

          {/* Other Main Pages */}
          <Route path="/magazine" element={<motion.div {...pageTransition}><MagazinePage /></motion.div>} />
          <Route path="/more" element={<motion.div {...pageTransition}><MorePage /></motion.div>} />
          <Route path="/more/ev-policies" element={<motion.div {...pageTransition}><EvPoliciesPage /></motion.div>} />
          <Route path="/ev-experts-talk" element={<motion.div {...pageTransition}><EvExpertsTalkPage /></motion.div>} />
          <Route path="/ev-forums" element={<motion.div {...pageTransition}><EvForumsPage /></motion.div>} />
          <Route path="/jobs" element={<motion.div {...pageTransition}><JobsPage /></motion.div>} />
          <Route path="/contact" element={<motion.div {...pageTransition}><ContactUsPage /></motion.div>} />

          {/* Not Found - Keep last */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
