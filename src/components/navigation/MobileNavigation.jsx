
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Menu, X, Car } from 'lucide-react';


const MobileNavLink = ({ to, children, setOpen, icon: Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ease-in-out group",
        isActive
          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-inner"
          : "text-foreground hover:bg-accent/50 hover:text-accent-foreground"
      )
    }
    onClick={() => setOpen(false)}
  >
    {Icon && <Icon className={cn("h-5 w-5 flex-shrink-0 transition-colors", "text-muted-foreground group-hover:text-primary", "group-[.active]:text-primary-foreground")} />}
    <span className={cn("transition-colors", "group-hover:text-primary", "group-[.active]:text-primary-foreground")}>{children}</span>
  </NavLink>
);


function MobileNavigation({ navItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="ml-auto flex items-center lg:hidden">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50 focus-visible:ring-primary">
            <Menu className="h-6 w-6 text-primary" />
            <span className="sr-only">Open main menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 flex flex-col bg-gradient-to-b from-background via-background to-accent/10 text-foreground border-r border-primary/10">
          <SheetHeader className="p-6 pb-4 border-b border-primary/10">
            <SheetTitle className="flex items-center gap-2 text-foreground">
               <Car className="h-7 w-7 text-primary" />
               <span className="font-bold text-xl font-serif tracking-tight">Humans of EV</span>
            </SheetTitle>
             <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:bg-secondary text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
          </SheetHeader>

          <div className="flex-grow overflow-y-auto p-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <React.Fragment key={item.label || item.to || index}>
                  {item.type === 'link' && (
                    <MobileNavLink to={item.to} setOpen={setMobileMenuOpen} icon={item.icon}>{item.label}</MobileNavLink>
                  )}
                  {item.type === 'dropdown' && (
                    <>
                      <Separator className="my-2 border-primary/10" />
                      <h4 className="px-4 pt-2 pb-1 text-sm font-semibold text-primary uppercase tracking-wider">{item.label}</h4>
                      {item.content.items.map((subItem) => (
                        <MobileNavLink key={subItem.href} to={subItem.href} setOpen={setMobileMenuOpen} icon={subItem.icon}>{subItem.title}</MobileNavLink>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
           <div className="p-4 border-t border-primary/10 mt-auto">
             <p className="text-xs text-center text-muted-foreground">&copy; {new Date().getFullYear()} Humans of EV</p>
           </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
