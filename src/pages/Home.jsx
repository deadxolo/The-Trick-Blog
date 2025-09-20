import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockBlogPosts, mockCategories, featuredPost } from '../mock';
import { ArrowRight, BookOpen, Users, Coffee, TrendingUp } from 'lucide-react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(mockBlogPosts.slice(1, 7)); // Exclude featured post, show 6 posts
    } else {
      setFilteredPosts(
        mockBlogPosts.filter(post => post.category === selectedCategory).slice(0, 6)
      );
    }
  }, [selectedCategory]);

  const stats = [
    { icon: BookOpen, label: 'Articles', value: '50+' },
    { icon: Users, label: 'Readers', value: '1.2K+' },
    { icon: Coffee, label: 'Coffee Cups', value: '∞' },
    { icon: TrendingUp, label: 'Growth', value: '120%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-slate-600 border-slate-300">
              Welcome to The Trick Blog
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Discover Developer
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent"> Tricks</span>
              <br />& Modern Techniques
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Explore insightful articles, tutorials, and tips that will elevate your development skills. 
              From JavaScript tricks to modern web development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                <Link to="/blog">
                  Start Reading
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <stat.icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Article</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our most popular and insightful content, handpicked for you
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BlogCard post={featuredPost} featured={true} />
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest development trends and techniques
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {mockCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-slate-900 hover:bg-slate-800 text-white'
                    : 'hover:bg-slate-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get the latest articles and developer tips delivered straight to your inbox. 
                No spam, just quality content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;