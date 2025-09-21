import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 text-slate-600 border-slate-300">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              We'd Love to <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent"> Hear From You</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
              <p className="text-slate-600 text-lg">
                Reach out using the details below, or fill in the form and we’ll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-600">Email us at</p>
                    <p className="font-medium text-slate-900">arjuxolo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                    <Phone className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-600">Call us on</p>
                    <p className="font-medium text-slate-900">+91 9306466642</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                    <MapPin className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-600">Visit us at</p>
                    <p className="font-medium text-slate-900">Hisar , India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-md p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="bg-slate-900 hover:bg-slate-800 text-white w-full">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
