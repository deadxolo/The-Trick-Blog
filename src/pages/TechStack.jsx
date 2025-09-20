import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Code, 
  Palette, 
  Database, 
  Server, 
  Globe, 
  Layers,
  Star,
  BookOpen,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const techStack = [
    {
      category: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        {
          name: "HTML5",
          level: "Expert",
          description: "Semantic markup, web APIs, accessibility, forms validation",
          features: ["Semantic Elements", "Canvas API", "Local Storage", "Geolocation", "Web Workers"],
          projects: 15
        },
        {
          name: "CSS3",
          level: "Expert", 
          description: "Modern layouts, animations, responsive design, CSS Grid & Flexbox",
          features: ["Grid & Flexbox", "Animations", "Custom Properties", "Media Queries", "BEM Methodology"],
          projects: 18
        },
        {
          name: "JavaScript",
          level: "Expert",
          description: "ES6+, async programming, DOM manipulation, design patterns",
          features: ["ES6+ Features", "Async/Await", "Closures", "Prototypes", "Modules"],
          projects: 25
        },
        {
          name: "React.js",
          level: "Expert",
          description: "Hooks, context, performance optimization, custom components",
          features: ["Hooks", "Context API", "Performance", "Custom Hooks", "JSX"],
          projects: 20
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          description: "Utility-first CSS framework, responsive design, custom configurations",
          features: ["Utility Classes", "Responsive Design", "Custom Themes", "JIT Compiler", "Components"],
          projects: 12
        }
      ]
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        {
          name: "Node.js",
          level: "Expert",
          description: "Server-side JavaScript, event-driven architecture, npm ecosystem",
          features: ["Event Loop", "NPM", "File System", "Streams", "Child Processes"],
          projects: 18
        },
        {
          name: "Express.js",
          level: "Expert",
          description: "Web framework, middleware, routing, API development",
          features: ["Routing", "Middleware", "Templates", "Error Handling", "Security"],
          projects: 16
        }
      ]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      technologies: [
        {
          name: "MongoDB",
          level: "Advanced",
          description: "NoSQL database, document-based, aggregation pipelines, indexing",
          features: ["Document Store", "Aggregation", "Indexing", "Replication", "GridFS"],
          projects: 14
        }
      ]
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      duration: "4-6 weeks",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "Build strong fundamentals in web technologies",
      projects: ["Personal Portfolio", "Interactive Calculator", "Todo App"]
    },
    {
      phase: "Frontend Mastery",
      duration: "6-8 weeks", 
      technologies: ["React.js", "Tailwind CSS"],
      description: "Master modern frontend development",
      projects: ["E-commerce Site", "Blog Platform", "Dashboard App"]
    },
    {
      phase: "Full-Stack Development",
      duration: "8-10 weeks",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      description: "Complete full-stack web applications",
      projects: ["REST API", "Real-time Chat", "Social Media App"]
    }
  ];

  const filteredTech = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(stack => stack.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Layers className="w-12 h-12 text-slate-700" />
              <Code className="w-10 h-10 text-blue-600" />
            </div>
            
            <Badge variant="outline" className="mb-6 text-slate-600 border-slate-300">
              Complete Web Development Stack
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Master the
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Complete</span>
              <br />Web Development Stack
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn HTML, CSS, JavaScript, React, Tailwind, Node.js, Express.js, and MongoDB. 
              Everything you need to become a full-stack web developer with comprehensive tutorials and hands-on projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive coverage of modern web development technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Frontend', 'Backend', 'Database'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
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

          {/* Technology Cards */}
          <div className="space-y-12">
            {filteredTech.map((stack, stackIndex) => (
              <div key={stackIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stack.color} flex items-center justify-center`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{stack.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {stack.technologies.map((tech, techIndex) => (
                    <Card key={techIndex} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-slate-900">{tech.name}</h4>
                          <Badge 
                            variant={tech.level === 'Expert' ? 'default' : 'secondary'}
                            className={tech.level === 'Expert' ? 'bg-green-600' : ''}
                          >
                            {tech.level}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {tech.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">{tech.projects} Projects Completed</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-slate-700 mb-2">Key Features:</p>
                          {tech.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Learning Path</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Structured approach to mastering full-stack web development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {learningPath.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{phase.phase}</h3>
                      <p className="text-sm text-slate-500">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-slate-700 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-slate-700 mb-2">Sample Projects:</p>
                      <ul className="space-y-1">
                        {phase.projects.map((project, projIndex) => (
                          <li key={projIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span className="text-sm text-slate-600">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the comprehensive web development course and learn from industry-tested curriculum. 
              Build real projects and master the complete stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Free Course
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Download Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;