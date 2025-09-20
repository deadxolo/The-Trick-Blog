import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
  if (featured) {
    return (
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <Badge variant="secondary" className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30">
              Featured
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
              {post.title}
            </h2>
            <p className="text-white/90 mb-4 text-sm sm:text-base">
              {post.excerpt}
            </p>
            <div className="flex items-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Link 
              to={`/blog/${post.id}`}
              className="inline-flex items-center space-x-2 mt-4 text-white font-medium hover:text-white/80 transition-colors"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700"
        >
          {post.category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-700 transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center space-x-2 text-slate-900 font-medium hover:text-slate-600 transition-colors group"
          >
            <span>Read</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;