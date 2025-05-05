
import {
  Home, Newspaper, Lightbulb, Calendar, BookOpen, Cpu, FileText, Mic2, MessageSquare, Briefcase, Mail, LayoutGrid
} from 'lucide-react';

const navItems = [
  { type: 'link', to: '/', label: 'Home', icon: Home },
  {
    type: 'dropdown',
    label: 'News',
    icon: Newspaper,
    triggerPathPrefix: '/news',
    content: {
      image: { src: "https://images.unsplash.com/photo-1681055946806-ae341cad3f7e", alt: "EV charging illustration" },
      title: 'Stay Updated',
      description: 'The latest happenings in the electric vehicle world.',
      items: [
        { href: '/news/articles', title: 'Articles', icon: Newspaper, description: 'In-depth reads, reports, and features.' },
        { href: '/news/startups', title: 'Startups', icon: Lightbulb, description: 'Meet the innovators shaping the future.' },
        { href: '/news/events', title: 'Events', icon: Calendar, description: 'Find upcoming EV conferences & meetups.' },
       
      ],
    },
  },
  { type: 'link', to: '/magazine', label: 'Magazine', icon: BookOpen },
  { type: 'link', to: '/tech-updates', label: 'Tech Updates', icon: Cpu },
  {
    type: 'dropdown',
    label: 'Resources',
    icon: LayoutGrid,
    triggerPathPrefix: '/more|/ev-experts|/ev-forums|/jobs',
    content: {
      items: [
        { href: '/more/ev-policies', title: 'EV Policies', icon: FileText, description: 'Understand regulations & incentives.' },
        { href: '/ev-experts-talk', title: 'Experts Talk', icon: Mic2, description: 'Insights from industry leaders.' },
        { href: '/ev-forums', title: 'Forums', icon: MessageSquare, description: 'Connect with the EV community.' },
        { href: '/jobs', title: 'Jobs', icon: Briefcase, description: 'Find career opportunities in EV.' },
      ],
    },
  },
  { type: 'link', to: '/contact', label: 'Contact Us', icon: Mail },
];

export default navItems;
