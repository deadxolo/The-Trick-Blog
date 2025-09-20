import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Search, BookOpen } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">AR</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-200"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                The Trick Blog
              </h1>
              <p className="text-xs text-slate-500 -mt-1">Developer Insights & Tips</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 ${
                  isActive(item.path)
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AR</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-slate-900">The Trick Blog</h2>
                      <p className="text-xs text-slate-500">Developer Insights</p>
                    </div>
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 ${
                        isActive(item.path)
                          ? 'text-slate-900 bg-slate-100'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <Search className="w-4 h-4 mr-2" />
                      Search Articles
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;