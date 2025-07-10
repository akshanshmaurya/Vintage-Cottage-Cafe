import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AnimatedText } from "../../components/AnimatedText";

export const AboutPage = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Table Booking", href: "/booking" },
  ];

  const teamMembers = [
    {
      name: "Margaret Thompson",
      role: "Head Chef & Owner",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "With over 20 years of culinary experience, Margaret brings traditional British flavors to life."
    },
    {
      name: "James Wilson",
      role: "Sous Chef",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "James specializes in traditional pastries and has won several awards for his scone recipes."
    },
    {
      name: "Emily Carter",
      role: "Front of House Manager",
      image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Emily ensures every guest feels welcomed with her warm hospitality and attention to detail."
    }
  ];

  const values = [
    {
      title: "Traditional Recipes",
      description: "We use time-honored recipes passed down through generations, ensuring authentic flavors in every dish.",
      icon: "🍽️"
    },
    {
      title: "Local Ingredients",
      description: "We source the finest local ingredients from trusted suppliers to support our community.",
      icon: "🌾"
    },
    {
      title: "Warm Hospitality",
      description: "Our team is dedicated to providing exceptional service in a welcoming, homely atmosphere.",
      icon: "❤️"
    },
    {
      title: "Heritage & Charm",
      description: "Every corner of our cafe tells a story, creating an authentic vintage experience.",
      icon: "🏛️"
    }
  ];

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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-10000"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-200 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-400/30">
              Est. 1924 • A Story of Tradition
            </span>
          </div>
          
          <AnimatedText
            text="Our Journey Through"
            as="h2"
            split="words"
            animation="fade-up"
            className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Time & Tradition"
            as="span"
            split="words"
            animation="fade-up"
            className="block text-amber-400 font-serif italic text-5xl md:text-7xl mb-6"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Discover the heritage behind The Vintage Cottage Cafe and our passion for preserving traditional British cuisine."
            as="p"
            split="words"
            animation="fade-up"
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            trigger="scroll"
            stagger={0.05}
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText
                text="Our Story"
                as="h2"
                split="words"
                animation="fade-up"
                className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#161411] text-3xl md:text-4xl tracking-tight leading-tight mb-6"
                trigger="scroll"
                stagger={0.08}
              />
              <div className="space-y-4 text-[#897260] font-['Plus_Jakarta_Sans',Helvetica] leading-relaxed">
                <p>
                  Nestled in the heart of the countryside, The Vintage Cottage Cafe opened its doors in 1985 with a simple mission: to create a warm, welcoming space where traditional British cuisine meets timeless hospitality.
                </p>
                <p>
                  What started as a small family-run establishment has grown into a beloved local institution, cherished by generations of families who return time and again for our authentic flavors and cozy atmosphere.
                </p>
                <p>
                  Every dish we serve tells a story of heritage, crafted with recipes that have been lovingly preserved and perfected over decades. From our famous scones to our hearty cottage pie, we believe in honoring the past while creating new memories for the future.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Vintage Cottage Cafe Interior"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ce600f] rounded-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              text="What We Stand For"
              as="h2"
              split="words"
              animation="fade-up"
              className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#161411] text-3xl md:text-4xl tracking-tight leading-tight mb-4"
              trigger="scroll"
              stagger={0.08}
            />
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#897260] text-lg leading-relaxed max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving our guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#897260] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedText
              text="Meet Our Team"
              as="h2"
              split="words"
              animation="fade-up"
              className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#161411] text-3xl md:text-4xl tracking-tight leading-tight mb-4"
              trigger="scroll"
              stagger={0.08}
            />
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#897260] text-lg leading-relaxed max-w-2xl mx-auto">
              The passionate people behind your memorable dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-xl mb-2">
                      {member.name}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#ce600f] text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#897260] text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-[#161411]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedText
            text="Experience Our Story"
            as="h2"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-4"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Join us for an unforgettable dining experience where every meal tells a story"
            as="p"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            trigger="scroll"
            stagger={0.05}
          />
          <Button className="bg-[#ce600f] hover:bg-[#b85510] text-white font-bold rounded-3xl px-8 py-4 h-auto text-base md:text-lg transition-colors">
            Book Your Table
          </Button>
        </div>
      </section>
    </div>
  );
};