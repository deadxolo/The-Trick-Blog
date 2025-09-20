import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import BlogCard from '../components/BlogCard';
import { mockBlogPosts, allPosts } from '../mock';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, Twitter, Facebook, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = allPosts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
      
      // Get related posts from the same category
      const related = allPosts
        .filter(p => p.id !== parseInt(id) && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h2>
          <Button asChild>
            <Link to="/blog">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Image */}
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-slate-700 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const language = lines[0].replace('```', '');
                const code = lines.slice(1, -1).join('\n');
                return (
                  <Card key={index} className="bg-slate-50 border-0">
                    <CardContent className="p-6">
                      <div className="text-xs text-slate-500 mb-2">{language}</div>
                      <pre className="text-sm text-slate-800 overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                );
              }
              return (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Share Buttons */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold text-slate-900">Share this article</h3>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" variant="outline" className="flex items-center space-x-2">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center space-x-2">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Button>
                <Button size="sm" variant="outline">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
              <p className="text-xl text-slate-600">
                More articles in {post.category}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;