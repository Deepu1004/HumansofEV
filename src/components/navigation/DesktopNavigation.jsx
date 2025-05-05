
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from 'lucide-react';


const ListItem = React.forwardRef(({ className, title, children, href, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            "flex select-none items-start space-x-3 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-gradient-to-r hover:from-accent/60 hover:to-secondary/30 hover:text-accent-foreground focus:bg-accent/70 focus:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring/50",
            className
          )}
          {...props}
        >
          {Icon && <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
          <div className="flex-grow">
            <div className="text-sm font-medium leading-none group-hover:text-primary">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground/90">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function DesktopNavigation({ navItems, location }) {

  const navLinkClasses = ({ isActive }) =>
    cn(
      navigationMenuTriggerStyle(),
      'transition-all duration-200 group text-sm relative overflow-hidden bg-transparent',
      isActive
        ? 'bg-accent/70 text-accent-foreground font-semibold shadow-inner'
        : 'hover:bg-accent/50 hover:text-accent-foreground',
      'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1'
    );

   const navTriggerClasses = (pathPrefix) =>
     cn(
       navigationMenuTriggerStyle(),
       'transition-all duration-200 group text-sm relative overflow-hidden bg-transparent',
        location.pathname.startsWith(pathPrefix)
          ? 'bg-accent/70 text-accent-foreground font-semibold shadow-inner'
          : 'hover:bg-accent/50 hover:text-accent-foreground',
       'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1'
     );

  return (
    <NavigationMenu className="hidden lg:flex flex-grow justify-center">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label || item.to}>
            {item.type === 'link' && (
              <NavLink to={item.to} className={navLinkClasses}>
                {item.icon && <item.icon className="h-4 w-4 mr-1.5" />} {item.label}
              </NavLink>
            )}
            {item.type === 'dropdown' && (
              <>
                <NavigationMenuTrigger className={navTriggerClasses(item.triggerPathPrefix)}>
                  {item.icon && <item.icon className="h-4 w-4 mr-1.5" />} {item.label} <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={cn(
                    "grid gap-3 p-4 bg-background shadow-xl border border-border/50 rounded-lg",
                    item.content.image ? "w-[450px] md:grid-cols-2 lg:w-[500px]" : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                  )}>
                    {item.content.image && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/30 to-accent/50 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow"
                            href={item.triggerPathPrefix}
                          >
                            <img  alt={item.content.image.alt} class="h-16 w-16 mb-2 text-primary" src={item.content.image.src} />
                            <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                              {item.content.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.content.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    )}
                    {item.content.items.map((subItem) => (
                      <ListItem key={subItem.title} href={subItem.href} title={subItem.title} icon={subItem.icon}>
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNavigation;
