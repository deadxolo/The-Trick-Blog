import React from 'react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Code, 
  Palette, 
  Users, 
  Shield, 
  BookOpen, 
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { category: "Backend", technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"] },
    { category: "Styling", technologies: ["Tailwind CSS", "Bootstrap", "Sass", "Styled Components", "Material-UI"] },
    { category: "Design", technologies: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Graphic Design", "Prototyping"] },
    { category: "Specialized", technologies: ["Three.js", "WebSocket", "PWAs", "OSINT Investigation", "Cybersecurity"] },
    { category: "AI Tools", technologies: ["ChatGPT", "Midjourney", "DALL-E", "GitHub Copilot", "Claude AI"] }
  ];

  const achievements = [
    { icon: Users, title: "50+ Students Taught", description: "Mentored over 50 students in full-stack development and design" },
    { icon: Code, title: "Full-Stack Developer", description: "Expert in modern web technologies and development practices" },
    { icon: Palette, title: "UI/UX Designer", description: "Creating beautiful and functional user experiences" },
    { icon: Shield, title: "OSINT Investigator", description: "Specialized in open-source intelligence and cybersecurity" }
  ];

  const experience = [
    {
      role: "Senior Full-Stack Developer & Instructor",
      duration: "2020 - Present",
      description: "Teaching modern web development while building production applications",
      highlights: ["Trained 50+ developers", "Built scalable web applications", "Specialized in React and Node.js"]
    },
    {
      role: "UI/UX Designer & Developer",
      duration: "2018 - Present", 
      description: "Combining design thinking with development expertise",
      highlights: ["Created design systems", "Improved user experiences", "Integrated AI design tools"]
    },
    {
      role: "OSINT Specialist",
      duration: "2019 - Present",
      description: "Conducting investigations using open-source intelligence techniques",
      highlights: ["Digital forensics", "Data analysis", "Security assessments"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="text-white font-bold text-4xl">AS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Arju Singh</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">Full-Stack Developer</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">UI/UX Designer</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Graphic Designer</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">OSINT Investigator</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Tech Educator</Badge>
            </div>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Passionate full-stack developer and educator with expertise in modern web technologies, 
              design, and cybersecurity. I've taught over <strong>50+ students</strong> and built 
              countless applications using cutting-edge technologies and AI tools.
            </p>

            <div className="flex items-center justify-center space-x-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What I Do</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I combine technical expertise with creative design and investigative skills to solve complex problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h3>
                  <p className="text-slate-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive knowledge across the full development stack and modern design tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-sm hover:bg-slate-900 hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My path through development, design, education, and investigation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0">
                <div className="md:w-1/3">
                  <div className="bg-slate-900 text-white p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{exp.role}</h3>
                    <p className="text-slate-300 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600 mb-4 text-lg">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center space-x-3">
                        <TrendingUp className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-slate-700 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Teaching Philosophy</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I believe in learning by building. My approach combines theoretical knowledge with hands-on 
              projects, ensuring students not only understand concepts but can apply them in real-world scenarios. 
              With over 50+ students mentored, I've seen the power of personalized guidance and practical experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Hands-On Learning</h3>
                <p className="text-slate-600">Build real projects from day one</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Personalized Approach</h3>
                <p className="text-slate-600">Tailored guidance for each student</p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Industry Relevant</h3>
                <p className="text-slate-600">Current technologies and practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you need development help, design consultation, or want to learn new technologies, 
              I'm here to help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
            
            <p className="text-slate-400">
              Based in India • Available for remote work and consultations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;