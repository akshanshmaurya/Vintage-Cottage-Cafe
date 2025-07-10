import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../../components/ui/navigation-menu";
import { Star, MapPin, Clock, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatedText } from "../../components/AnimatedText";

export const StitchDesign: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  // Customer testimonials data
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Food Blogger",
      quote: "The atmosphere is charming and the food is delightful! A true testament to British culinary tradition.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      rating: 5
    },
    {
      name: "David L.",
      role: "Regular Customer",
      quote: "Best afternoon tea in town. The scones are heavenly and the service is impeccable!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5
    },
    {
      name: "Emily R.",
      role: "Local Food Critic",
      quote: "A true hidden gem with authentic vintage charm. Every visit feels like stepping back in time.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reservations", href: "/booking" },
  ];

  // Instagram feed images data
  const instagramImages = [
    { id: 1, url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" },
    { id: 2, url: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg" },
    { id: 3, url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
    { id: 4, url: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg" },
    { id: 5, url: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
    { id: 6, url: "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg" }
  ];

  // Behind the scenes images data
  const behindScenesImages = [
    { id: 1, url: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg", width: "w-[456px]" },
    { id: 2, url: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg", width: "w-[228px]" },
  ];

  // Featured items data
  const featuredItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      title: "Classic Afternoon Tea",
      description: "Our signature afternoon tea service with homemade pastries and finger sandwiches.",
      price: "₹2,450"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg",
      title: "Vintage High Tea",
      description: "A selection of fine teas and traditional treats served on vintage china.",
      price: "₹3,200"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg",
      title: "Sunday Roast",
      description: "Traditional British roast with Yorkshire pudding and seasonal vegetables.",
      price: "₹1,895"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
      title: "Cream Tea",
      description: "Freshly baked scones with clotted cream, jam, and your choice of tea.",
      price: "₹1,250"
    }
  ];

  return (
    <React.Fragment>
      <div className="flex flex-col bg-gradient-to-b from-amber-50 to-white min-h-screen">
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
                backgroundImage: "url(https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          </div>
          
          <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-200 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-400/30">
                Est. 1924 • Traditional British Tea Room
              </span>
            </div>
            
            <AnimatedText
              text="Experience the Charm of"
              as="h2"
              split="words"
              animation="fade-up"
              className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight"
              trigger="scroll"
              stagger={0.08}
            />
            <AnimatedText
              text="Vintage Elegance"
              as="span"
              split="words"
              animation="fade-up"
              className="block text-amber-400 font-serif italic text-5xl md:text-7xl mb-6"
              trigger="scroll"
              stagger={0.08}
            />
            <AnimatedText
              text="Step into our timeless sanctuary where every cup tells a story, every bite brings comfort, and every moment becomes a cherished memory."
              as="p"
              split="words"
              animation="fade-up"
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
              trigger="scroll"
              stagger={0.05}
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/booking')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full px-8 py-4 text-lg shadow-2xl transition-all duration-300 hover:shadow-amber-600/25 hover:scale-105"
              >
                Reserve Your Table
              </Button>
              <Button 
                onClick={() => navigate('/menu')}
                variant="outline" 
                className="border-2 border-white text-amber-600 hover:bg-white hover:text-amber-900 font-semibold rounded-full px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              >
                View Menu
              </Button>
            </div>
          </div>

          {/* Decorative scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Our Specialties
              </span>
              <AnimatedText
                text="Signature Offerings"
                as="h2"
                split="words"
                animation="fade-up"
                className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
                trigger="scroll"
                stagger={0.08}
              />
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                Discover our carefully curated selection of traditional British delicacies, each crafted with love and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredItems.map((item, index) => (
                <Card key={item.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-amber-700 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-amber-600/30 text-amber-200 rounded-full text-sm font-medium mb-4">
                What Our Guests Say
              </span>
              <AnimatedText
                text="Testimonials"
                as="h2"
                split="words"
                animation="fade-up"
                className="text-4xl md:text-5xl font-bold mb-4"
                trigger="scroll"
                stagger={0.08}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-amber-200 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Follow Our Journey
              </span>
              <AnimatedText
                text="@VintageCottageCafe"
                as="h2"
                split="words"
                animation="fade-up"
                className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
                trigger="scroll"
                stagger={0.08}
              />
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                Get a glimpse into our daily life and seasonal specials through our Instagram feed.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Scenes Section */}
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Behind the Magic
              </span>
              <AnimatedText
                text="Crafted with Love"
                as="h2"
                split="words"
                animation="fade-up"
                className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
                trigger="scroll"
                stagger={0.08}
              />
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                Every dish is prepared with traditional methods and the finest ingredients, ensuring an authentic vintage experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {behindScenesImages.map((image, index) => (
                <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div
                    className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image.url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Find Us Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-amber-600/30 text-amber-200 rounded-full text-sm font-medium mb-4">
                Visit Us Today
              </span>
              <AnimatedText
                text="Find Us"
                as="h2"
                split="words"
                animation="fade-up"
                className="text-4xl md:text-5xl font-bold mb-6"
                trigger="scroll"
                stagger={0.08}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-amber-200">123 Vintage Lane<br />Cozy Town, CT1 2AB</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-amber-200">Daily: 9:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-amber-200">(01234) 567890<br />hello@vintagecottage.co.uk</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/booking')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full px-8 py-4 text-lg shadow-2xl transition-all duration-300 hover:shadow-amber-600/25 hover:scale-105"
              >
                Book Your Table
              </Button>
              <Button variant="outline" className="border-2 border-white bg-white text-amber-900 font-semibold rounded-full px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-amber-900">
                Get Directions
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-950 text-amber-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The Vintage Cottage</h3>
                    <p className="text-sm -mt-1">Café & Tea Room</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  A timeless sanctuary where tradition meets comfort, serving the finest British tea and culinary experiences since 1924.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Menu</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Reservations</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Gift Cards</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2024 The Vintage Cottage Café. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};