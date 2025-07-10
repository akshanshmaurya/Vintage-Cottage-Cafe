import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { X } from "lucide-react";
import { AnimatedText } from "../../components/AnimatedText";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const GalleryPage = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Table Booking", href: "/booking" },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "food", label: "Food & Drinks" },
    { id: "interior", label: "Interior" },
    { id: "events", label: "Events" },
    { id: "team", label: "Our Team" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Afternoon Tea Selection",
      category: "food"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Cozy Interior",
      category: "interior"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh Pancakes",
      category: "food"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Traditional Scones",
      category: "food"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sticky Toffee Pudding",
      category: "food"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fish and Chips",
      category: "food"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Head Chef at Work",
      category: "team"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Vintage Dining Room",
      category: "interior"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/8477/food-dinner-lunch-unhealthy.jpg?auto=compress&cs=tinysrgb&w=600",
      alt: "Traditional Cottage Pie",
      category: "food"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Private Event Setup",
      category: "events"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sous Chef Preparing Pastries",
      category: "team"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Cozy Corner Seating",
      category: "interior"
    },
    {
      id: 13,
      src: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Full English Breakfast",
      category: "food"
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Birthday Celebration",
      category: "events"
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Front of House Manager",
      category: "team"
    },
    {
      id: 16,
      src: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Rustic Kitchen View",
      category: "interior"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-10000"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-200 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-400/30">
              Our Visual Journey
            </span>
          </div>
          
          <AnimatedText
            text="Moments Captured in"
            as="h2"
            split="words"
            animation="fade-up"
            className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Timeless Beauty"
            as="span"
            split="words"
            animation="fade-up"
            className="block text-amber-400 font-serif italic text-5xl md:text-7xl mb-6"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Take a visual journey through our charming cafe, delicious dishes, and memorable moments."
            as="p"
            split="words"
            animation="fade-up"
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            trigger="scroll"
            stagger={0.05}
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-['Plus_Jakarta_Sans',Helvetica] font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#ce600f] text-white shadow-lg"
                    : "bg-white text-[#161411] hover:bg-[#ce600f] hover:text-white shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm">
                        View Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#ce600f] transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-lg">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-[#161411]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedText
            text="Experience It Yourself"
            as="h2"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-4"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Book your table today and create your own memorable moments at The Vintage Cottage Cafe"
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