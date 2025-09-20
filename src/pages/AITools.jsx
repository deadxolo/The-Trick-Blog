import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { aiToolsPosts } from '../mock';
import { 
  Brain, 
  Palette, 
  Code, 
  MessageSquare, 
  Image, 
  Zap,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AITools = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const aiCategories = [
    { name: "All", icon: Brain, count: 12 },
    { name: "Development", icon: Code, count: 4 },
    { name: "Design", icon: Palette, count: 3 },
    { name: "Content", icon: MessageSquare, count: 3 },
    { name: "Image", icon: Image, count: 2 }
  ];

  const featuredTools = [
    {
      name: "ChatGPT",
      category: "Development",
      description: "Advanced AI assistant for coding, debugging, and problem-solving",
      rating: 4.9,
      features: ["Code Generation", "Debugging", "Documentation", "Learning"],
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Midjourney",
      category: "Design",
      description: "AI-powered image generation for stunning visual content",
      rating: 4.8,
      features: ["Image Generation", "Art Creation", "Style Transfer", "Variations"],
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "GitHub Copilot",
      category: "Development",
      description: "AI pair programmer that helps you write code faster",
      rating: 4.7,
      features: ["Code Completion", "Suggestions", "Multiple Languages", "Context Aware"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Figma AI",
      category: "Design",
      description: "Intelligent design assistance integrated into Figma",
      rating: 4.6,
      features: ["Auto Layout", "Content Generation", "Style Suggestions", "Workflow"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const toolsComparison = [
    {
      category: "Code Generation",
      tools: [
        { name: "ChatGPT", score: 95, strengths: ["Explanations", "Multiple Languages", "Debugging"] },
        { name: "GitHub Copilot", score: 90, strengths: ["IDE Integration", "Context Awareness", "Real-time"] },
        { name: "Claude", score: 88, strengths: ["Complex Logic", "Code Review", "Architecture"] },
        { name: "Cursor AI", score: 85, strengths: ["Multi-file", "Local Processing", "Speed"] }
      ]
    },
    {
      category: "Image Generation",
      tools: [
        { name: "Midjourney", score: 95, strengths: ["Artistic Quality", "Style Variety", "Community"] },
        { name: "DALL-E 3", score: 90, strengths: ["Text Integration", "Realism", "Safety"] },
        { name: "Stable Diffusion", score: 85, strengths: ["Open Source", "Customization", "Local"] },
        { name: "Adobe Firefly", score: 82, strengths: ["Integration", "Commercial Safe", "Text Effects"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Brain className="w-12 h-12 text-blue-600" />
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-300">
              AI Tools Mastery Guide
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Master AI Tools for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Development</span>
              <br />& Design
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive guides to the most powerful AI tools for developers and designers. 
              Learn advanced techniques, compare alternatives, and boost your productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Zap className="w-5 h-5 mr-2" />
                Explore AI Tools
              </Button>
              <Button size="lg" variant="outline">
                <ArrowRight className="w-5 h-5 mr-2" />
                Read Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured AI Tools</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Top AI tools every developer and designer should master
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {tool.category}
                  </Badge>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {tool.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">AI Tools Comparison</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Detailed comparison to help you choose the right tools for your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {toolsComparison.map((comparison, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">{comparison.category}</h3>
                  
                  <div className="space-y-6">
                    {comparison.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-slate-900">{tool.name}</h4>
                          <span className="text-sm font-medium text-slate-600">{tool.score}%</span>
                        </div>
                        
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${tool.score}%` }}
                          ></div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {tool.strengths.map((strength, sIndex) => (
                            <Badge key={sIndex} variant="outline" className="text-xs">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">AI Tools Guides</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth tutorials and guides for mastering AI tools
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {aiCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category.name)}
                className={`transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiToolsPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <Brain className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Master AI Tools?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and designers who have transformed their workflow with AI. 
                Get started with our comprehensive guides and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View All Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITools;