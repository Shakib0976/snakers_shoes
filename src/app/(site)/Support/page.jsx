"use client";

import { useState } from 'react';
import { Search, Headphones, Truck, RefreshCcw, Shield, MessageCircle, Phone, Mail, Clock, MapPin, ChevronRight, CheckCircle, HelpCircle, FileText, Globe } from 'lucide-react';
import { faqCategories, faqs, supportStats } from '@/server/Support';

export default function Support() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [contactMethod, setContactMethod] = useState('email');


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 poppins-font">
      {/* Hero Section */}
      <div className="bg-gray-200 dark:bg-gray-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/10 dark:bg-white/10  rounded-full mb-6">
              <Headphones className="w-5 h-5" />
              <span className="text-sm font-medium">WE&apos;RE HERE TO HELP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-Thin mb-6 merriweather-font">
              How can we <span className=" bg-clip-text font-bold text-black dark:text-gray-100">help</span> you?
            </h1>
            <p className="dark:text-gray-300  text-gray-700 text-xl mb-8 max-w-2xl mx-auto">
              Get answers to your questions about orders, shipping, returns, products, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers (e.g., 'return policy', 'sizing', 'track order')"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-950/10 dark:bg-white/10 border border-white/20 text-white  dark:placeholder-gray-400  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-gray-900    text-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-11/12 mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {supportStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-400 rounded-lg  p-6 shadow-lg">
              <div className="text-blue-600 mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-11/12 mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - FAQ Categories */}
          <div className="lg:col-span-2">
            {/* FAQ Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className="bg-white dark:bg-gray-400 p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="text-gray-700 group-hover:text-blue-600 mb-3">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {category.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <span>View FAQs</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular FAQs */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  View all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-gray-400 rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <HelpCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${activeFAQ === faq.id ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {activeFAQ === faq.id && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <p className="text-gray-600">{faq.answer}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Was this helpful?
                          </button>
                          <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                              👍
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                              👎
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Help */}
          <div>
            {/* Contact Card */}
            <div className="bg-gray-600 rounded-2xl p-8 text-white mb-8 mt-5 lg:mt-15 ">
              <h3 className="text-2xl font-bold mb-4 merriweather-font">Need more help?</h3>
              <p className="text-blue-100 mb-6">
                Our support team is ready to assist you with any questions or concerns.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm text-blue-200">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-blue-200">+08801727487419</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-blue-200">SREPS@gmail.com</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gray-950    text-primary  py-3 rounded-lg font-semibold hover:bg-gray-900  cursor-pointer transition-colors">
                Contact Support
              </button>
            </div>

            {/* Support Hours */}
            <div className="mt-8 bg-gray-900 dark:bg-gray-600 text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5" />
                <h4 className="font-semibold merriweather-font">Support Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 12:00 AM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium">9:00 AM - 10:00 PM EST</span>
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Based in New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* CTA Banner */}
      <div className="bg-linear-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-8">
              Our dedicated support team is just one click away from helping you with any issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Live Chat
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Call Now: 1-800-SNEAKERS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}