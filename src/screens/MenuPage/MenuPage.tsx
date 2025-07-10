import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AnimatedText } from "../../components/AnimatedText";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MenuPage = (): JSX.Element => {
  const navigate = useNavigate();

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Table Booking", href: "/booking" },
  ];

  // Menu data organized by categories
  const menuCategories: MenuCategory[] = [
    {
      title: "Breakfast & Brunch",
      items: [
        {
          name: "Full English Breakfast",
          description: "Two eggs, bacon, sausages, black pudding, baked beans, grilled tomatoes, mushrooms, and toast",
          price: "₹1,095",
          image: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Vintage Pancakes",
          description: "Fluffy buttermilk pancakes served with maple syrup, fresh berries, and clotted cream",
          price: "₹750",
          image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Eggs Benedict",
          description: "Poached eggs on toasted English muffins with ham and hollandaise sauce",
          price: "₹850",
        },
        {
          name: "Avocado Toast",
          description: "Smashed avocado on sourdough with cherry tomatoes, feta cheese, and a drizzle of olive oil",
          price: "₹650",
        }
      ]
    },
    {
      title: "Mains",
      items: [
        {
          name: "Traditional Cottage Pie",
          description: "Slow-cooked minced lamb with vegetables, topped with creamy mashed potatoes",
          price: "₹1,295",
          image: "https://images.pexels.com/photos/8477/food-dinner-lunch-unhealthy.jpg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Fish & Chips",
          description: "Beer-battered cod with hand-cut chips, mushy peas, and tartare sauce",
          price: "₹1,150",
          image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Chicken & Mushroom Pie",
          description: "Tender chicken and mushrooms in a rich gravy, encased in golden pastry",
          price: "₹1,075",
        },
        {
          name: "Bangers & Mash",
          description: "Traditional pork sausages with creamy mashed potatoes and onion gravy",
          price: "₹995",
        },
        {
          name: "Ploughman's Lunch",
          description: "Selection of cheeses, ham, pickles, crusty bread, and salad",
          price: "₹895",
        }
      ]
    },
    {
      title: "Light Bites & Sandwiches",
      items: [
        {
          name: "Afternoon Tea Sandwich Selection",
          description: "Cucumber, egg & cress, smoked salmon, and ham & mustard finger sandwiches",
          price: "₹795",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Vintage Club Sandwich",
          description: "Triple-layered with chicken, bacon, lettuce, tomato, and mayo on toasted bread",
          price: "₹825",
        },
        {
          name: "Soup of the Day",
          description: "Freshly made daily soup served with crusty bread and butter",
          price: "₹495",
        },
        {
          name: "Welsh Rarebit",
          description: "Rich cheese sauce on toasted bread, grilled to perfection",
          price: "₹575",
        }
      ]
    },
    {
      title: "Desserts & Sweet Treats",
      items: [
        {
          name: "Traditional Scones",
          description: "Freshly baked scones served with clotted cream and strawberry jam",
          price: "₹425",
          image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Sticky Toffee Pudding",
          description: "Warm sponge cake with toffee sauce and vanilla ice cream",
          price: "₹550",
          image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          name: "Lemon Drizzle Cake",
          description: "Moist lemon sponge with a tangy lemon glaze",
          price: "₹395",
        },
        {
          name: "Apple Crumble",
          description: "Traditional apple crumble served warm with custard or cream",
          price: "₹495",
        },
        {
          name: "Victoria Sponge",
          description: "Classic sponge cake filled with jam and fresh cream",
          price: "₹375",
        }
      ]
    },
    {
      title: "Beverages",
      items: [
        {
          name: "Traditional Afternoon Tea",
          description: "Selection of fine teas including Earl Grey, English Breakfast, and Chamomile",
          price: "₹295",
        },
        {
          name: "Freshly Ground Coffee",
          description: "Americano, Cappuccino, Latte, or Espresso",
          price: "₹245",
        },
        {
          name: "Hot Chocolate",
          description: "Rich Belgian chocolate with whipped cream and marshmallows",
          price: "₹325",
        },
        {
          name: "Fresh Fruit Juices",
          description: "Orange, Apple, or Cranberry",
          price: "₹195",
        },
        {
          name: "Homemade Lemonade",
          description: "Refreshing traditional lemonade made fresh daily",
          price: "₹245",
        }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <AnimatedText
                  text="The Vintage Cottage"
                  as="h1"
                  split="words"
                  animation="fade-up"
                  className="text-2xl font-bold text-amber-900 tracking-tight"
                />
                <p className="text-sm text-amber-700 -mt-1">Café & Tea Room</p>
              </div>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200 relative group inline-block"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Menu Categories Navigation */}
      <nav className="bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-1 bg-amber-600 rounded-full mb-2"></div>
              <span className="font-serif italic text-2xl text-amber-700">Welcome to</span>
              <AnimatedText
                text="Our Menu"
                as="h2"
                split="chars"
                animation="fade-up"
                className="text-4xl md:text-6xl font-bold text-amber-900 mb-2"
                trigger="scroll"
                stagger={0.05}
              />
              <div className="w-32 h-1 bg-amber-600/50 rounded-full mb-6"></div>
              <AnimatedText
                text="Traditional British Cuisine"
                as="h3"
                split="words"
                animation="fade-up"
                className="text-3xl md:text-4xl font-bold text-amber-800 mb-4 font-serif italic"
                trigger="scroll"
                stagger={0.05}
              />
              <p className="text-lg text-amber-700 max-w-2xl mx-auto font-medium">
                Discover our carefully curated selection of traditional British delicacies, each crafted with love and attention to detail.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 sticky top-20 bg-gradient-to-b from-amber-50 to-white py-4 z-40">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(`category-${index}`)}
                className="px-6 py-3 rounded-full bg-white text-amber-900 hover:bg-amber-600 hover:text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200"
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <main className="flex-1 py-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <section
              key={categoryIndex}
              id={`category-${categoryIndex}`}
              className="mb-16 md:mb-20 scroll-mt-32"
            >
              <AnimatedText
                text={category.title}
                as="h2"
                split="words"
                animation="fade-up"
                className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-2xl md:text-3xl leading-tight mb-8 md:mb-12 text-center"
                trigger="scroll"
                stagger={0.05}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {item.image && (
                        <div className="relative h-48 md:h-56 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <AnimatedText
                            text={item.name}
                            as="h3"
                            split="words"
                            animation="fade-up"
                            className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-lg md:text-xl leading-tight flex-1 pr-4"
                            trigger="scroll"
                            stagger={0.05}
                          />
                          <span className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#ce600f] text-lg md:text-xl whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        
                        <AnimatedText
                          text={item.description}
                          as="p"
                          split="words"
                          animation="fade-up"
                          className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#897260] text-sm md:text-base leading-relaxed"
                          trigger="scroll"
                          stagger={0.05}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedText
            text="Ready to Experience Our Menu?"
            as="h2"
            split="words"
            animation="fade-up"
            className="text-4xl md:text-5xl font-bold mb-6"
            trigger="scroll"
            stagger={0.05}
          />
          <AnimatedText
            text="Book your table today and enjoy our delicious, freshly prepared dishes in our charming vintage atmosphere."
            as="p"
            split="words"
            animation="fade-up"
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            trigger="scroll"
            stagger={0.05}
          />
          <Button 
            onClick={() => navigate('/booking')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full px-8 py-4 text-lg shadow-2xl transition-all duration-300 hover:shadow-amber-600/25 hover:scale-105"
          >
            Reserve Your Table
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161411] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-4 h-4 bg-[url(/vector---0.svg)] bg-[100%_100%] filter invert" />
            <AnimatedText
              text="The Vintage Cottage Cafe"
              as="h3"
              split="words"
              animation="fade-up"
              className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-white text-xl"
              trigger="scroll"
              stagger={0.05}
            />
          </div>
          <AnimatedText
            text="Experience the charm of yesteryear with our delightful menu and cozy ambiance."
            as="p"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-gray-300 text-sm mb-4"
            trigger="scroll"
            stagger={0.05}
          />
          <AnimatedText
            text="© 2024 The Vintage Cottage Cafe. All rights reserved."
            as="p"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-gray-400 text-xs"
            trigger="scroll"
            stagger={0.05}
          />
        </div>
      </footer>
    </div>
  );
};