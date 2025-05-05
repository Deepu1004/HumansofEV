
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function ContactUsPage() {
   const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (Placeholder)",
      description: "Thank you for contacting us! We'll get back to you soon.",
      duration: 5000,
    });
    // Add logic to handle form submission
     e.target.reset(); // Reset form fields
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-4xl font-bold font-serif text-center mb-8">Contact Us</h1>
      <p className="text-center text-lg text-muted-foreground mb-8">
        Have questions, suggestions, or want to collaborate? Reach out to us!
      </p>

       <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-lg border shadow-sm">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
             <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Your Name</label>
             <input type="text" id="name" name="name" required className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Jane Doe" />
           </div>
           <div>
             <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Your Email</label>
             <input type="email" id="email" name="email" required className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="you@example.com" />
           </div>
         </div>
         <div>
           <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
           <input type="text" id="subject" name="subject" required className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Question about..." />
         </div>
         <div>
           <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
           <textarea id="message" name="message" rows="5" required className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Your message here..."></textarea>
         </div>

         <Button type="submit" className="w-full md:w-auto">
           Send Message
         </Button>
          <p className="text-xs text-muted-foreground text-center md:text-left">Submitting this form is currently a placeholder action.</p>
      </form>

       <div className="mt-10 text-center">
         <img  alt="Illustration of an envelope" class="w-24 h-24 mx-auto text-primary opacity-70" src="https://images.unsplash.com/photo-1690088617496-17fac4733608" />
       </div>
    </motion.div>
  );
}

export default ContactUsPage;
