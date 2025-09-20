import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Blog: [
      { name: 'All Articles', path: '/blog' },
      { name: 'JavaScript', path: '/blog?category=JavaScript' },
      { name: 'React', path: '/blog?category=React' },
      { name: 'CSS', path: '/blog?category=CSS' }
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@thetrickblog.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">AR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Trick Blog</h3>
                  <p className="text-slate-400 text-sm">Developer Insights & Tips</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Discover the latest development tricks, tutorials, and insights. 
                Join our community of developers sharing knowledge and growing together.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-slate-500"
                  />
                  <Button className="bg-white text-slate-900 hover:bg-slate-100 font-medium">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} The Trick Blog. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by developers, for developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;