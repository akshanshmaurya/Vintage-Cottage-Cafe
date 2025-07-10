import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { useForm } from "react-hook-form";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { supabase, type Booking } from "../../lib/supabase";
import { Calendar, Clock, Users, MapPin, CheckCircle, XCircle } from "lucide-react";
import { AnimatedText } from "../../components/AnimatedText";

interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  table_preference: string;
  name: string;
  email: string;
  phone: string;
  special_requests?: string;
}

export const BookingPage = (): JSX.Element => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [user, setUser] = useState<any>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Table Booking", href: "/booking" },
  ];

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
  ];

  const tablePreferences = [
    "No preference",
    "Window table",
    "Corner booth",
    "Garden view",
    "Private dining area"
  ];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  useEffect(() => {
    checkUser();
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const fetchBookings = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('user_id', user.id)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
    } else {
      setBookings(data || []);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // For demo purposes, we'll simulate a booking without actual Supabase connection
      const newBooking: Omit<Booking, 'id' | 'created_at'> = {
        user_id: user?.id || 'demo-user',
        date: data.date,
        time: data.time,
        guests: data.guests,
        table_preference: data.table_preference,
        name: data.name,
        email: data.email,
        phone: data.phone,
        special_requests: data.special_requests,
        status: 'confirmed'
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add to local state for demo
      const demoBooking: Booking = {
        ...newBooking,
        id: Date.now().toString(),
        created_at: new Date().toISOString()
      };

      setBookings(prev => [demoBooking, ...prev]);
      setSubmitMessage({ type: 'success', text: 'Booking confirmed successfully!' });
      reset();
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to create booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      case 'completed':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-10000"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-200 rounded-full text-sm font-medium backdrop-blur-sm border border-amber-400/30">
              Reserve Your Experience
            </span>
          </div>
          
          <AnimatedText
            text="Book Your Table at"
            as="h2"
            split="words"
            animation="fade-up"
            className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="The Vintage Cottage"
            as="span"
            split="words"
            animation="fade-up"
            className="block text-amber-400 font-serif italic text-5xl md:text-7xl mb-6"
            trigger="scroll"
            stagger={0.08}
          />
          <AnimatedText
            text="Reserve your spot for an unforgettable dining experience in our charming vintage atmosphere."
            as="p"
            split="words"
            animation="fade-up"
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            trigger="scroll"
            stagger={0.05}
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-b from-amber-50 to-white">
        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <AnimatedText
                text="Make a Reservation"
                as="h2"
                split="words"
                animation="fade-up"
                className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-2xl mb-6"
                trigger="scroll"
                stagger={0.08}
              />

              {submitMessage && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                      {...register('date', { required: 'Date is required' })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                    />
                    {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Time
                    </label>
                    <select
                      {...register('time', { required: 'Time is required' })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Number of Guests
                    </label>
                    <select
                      {...register('guests', { required: 'Number of guests is required', valueAsNumber: true })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                    >
                      <option value="">Select guests</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                    {errors.guests && <p className="text-red-600 text-sm mt-1">{errors.guests.message}</p>}
                  </div>

                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Table Preference
                    </label>
                    <select
                      {...register('table_preference', { required: 'Table preference is required' })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                    >
                      <option value="">Select preference</option>
                      {tablePreferences.map(pref => (
                        <option key={pref} value={pref}>{pref}</option>
                      ))}
                    </select>
                    {errors.table_preference && <p className="text-red-600 text-sm mt-1">{errors.table_preference.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent"
                      placeholder="+44 123 456 7890"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#161411] text-sm mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    {...register('special_requests')}
                    rows={3}
                    className="w-full p-3 border border-[#e5e8ea] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ce600f] focus:border-transparent resize-none"
                    placeholder="Any dietary requirements, celebrations, or special requests..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#ce600f] hover:bg-[#b85510] text-white font-bold rounded-lg px-6 py-4 h-auto text-base transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Reservation'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedText
            text="Need Help with Your Booking?"
            as="h2"
            split="words"
            animation="fade-up"
            className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-2xl mb-8"
            trigger="scroll"
            stagger={0.08}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-lg mb-2">
                Call Us
              </h3>
              <p className="font-['Plus_Jakarta_Sans',Helvetica] text-[#897260]">
                +44 123 456 7890
              </p>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-lg mb-2">
                Email Us
              </h3>
              <p className="font-['Plus_Jakarta_Sans',Helvetica] text-[#897260]">
                bookings@vintagecottage.co.uk
              </p>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#161411] text-lg mb-2">
                Opening Hours
              </h3>
              <p className="font-['Plus_Jakarta_Sans',Helvetica] text-[#897260]">
                Daily: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};