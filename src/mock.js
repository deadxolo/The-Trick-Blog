// Comprehensive mock data for The Trick Blog - Web Development Focus Only
export const mockBlogPosts = [
  {
    id: 1,
    title: "Complete HTML5 Mastery: From Basics to Advanced Semantic Web",
    excerpt: "Master HTML5 with semantic elements, forms, APIs, and modern best practices. Complete syllabus with tricks and alternative approaches for web developers.",
    content: `HTML5 is the foundation of modern web development. This comprehensive guide covers everything from basics to advanced concepts with practical examples.

## HTML5 Complete Syllabus

### Beginner Level (Weeks 1-2)
- HTML structure and semantic elements
- Essential tags: headings, paragraphs, lists, links
- Forms and input validation
- Images, audio, video elements
- Tables and data representation

### Intermediate Level (Weeks 3-4)
- HTML5 semantic elements (header, nav, main, article, section, aside, footer)
- Canvas API for graphics and animations
- Local Storage and Session Storage
- Geolocation API
- Drag and Drop API

### Advanced Level (Weeks 5-6)
- Web Workers for background processing
- Service Workers for offline functionality
- Progressive Web App fundamentals
- Accessibility (ARIA) best practices
- Performance optimization techniques

## HTML5 Tricks and Alternative Methods

### 1. Semantic Structure Best Practices

\`\`\`html
<!-- Traditional approach (avoid) -->
<div class="header">
  <div class="nav">
    <div class="menu-item">Home</div>
  </div>
</div>

<!-- Modern semantic approach -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>
\`\`\`

### 2. Form Validation Alternatives

\`\`\`html
<!-- HTML5 Built-in Validation -->
<form>
  <input type="email" required 
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
         title="Please enter a valid email">
  
  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         placeholder="123-456-7890">
  
  <input type="url" placeholder="https://example.com">
  
  <input type="date" min="2024-01-01" max="2024-12-31">
</form>

<!-- JavaScript Custom Validation -->
<script>
function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

document.getElementById('email').addEventListener('input', function(e) {
  const isValid = validateEmail(e.target.value);
  e.target.setCustomValidity(isValid ? '' : 'Invalid email format');
});
</script>
\`\`\`

Master these HTML5 concepts to build semantic, accessible, and feature-rich web applications.`,
    author: "Arju Singh",
    publishedAt: "2024-01-20",
    category: "HTML",
    tags: ["HTML5", "Semantic Web", "Web APIs", "Forms"],
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "CSS Mastery: Grid, Flexbox, and Modern Layout Techniques",
    excerpt: "Complete CSS course from basics to advanced animations. Master CSS Grid, Flexbox, custom properties, and responsive design with alternative layout methods.",
    content: `CSS has evolved tremendously with powerful layout systems and modern features. This comprehensive guide covers everything you need to master CSS.

## Complete CSS Syllabus

### Foundation (Weeks 1-2)
- CSS syntax, selectors, and specificity
- Box model, positioning, and display properties
- Colors, typography, and units (px, em, rem, vh, vw)
- Responsive design principles and media queries

### Intermediate (Weeks 3-4)
- Flexbox complete mastery
- CSS Grid advanced techniques  
- Animations and transitions
- Custom properties (CSS variables)
- Pseudo-classes and pseudo-elements

### Advanced (Weeks 5-6)
- CSS architecture methodologies (BEM, OOCSS)
- Performance optimization
- Modern CSS features (container queries, subgrid)
- CSS preprocessing concepts

## CSS Layout Tricks and Alternative Methods

### 1. Centering Elements - Multiple Approaches

\`\`\`css
/* Method 1: Flexbox (Most Modern) */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Method 2: Grid (Ultra Modern) */
.grid-center {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* Method 3: Absolute Positioning */
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

Master these CSS techniques to create beautiful, performant, and maintainable stylesheets for modern web applications.`,
    author: "Arju Singh", 
    publishedAt: "2024-01-18",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design", "Animations"],
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "JavaScript Mastery: ES6+ to Advanced Patterns and DOM Manipulation",
    excerpt: "Comprehensive JavaScript guide covering ES6+, async programming, DOM manipulation, design patterns, and modern development techniques.",
    content: `JavaScript is the cornerstone of modern web development. This complete roadmap covers everything from ES6 basics to advanced architectural patterns.

## JavaScript Complete Syllabus

### Fundamentals (Weeks 1-3)
- Variables (var, let, const) and data types
- Functions, scope, and closures
- Objects, arrays, and methods
- Control structures and loops
- DOM manipulation and events

### ES6+ Modern Features (Weeks 4-6)
- Arrow functions and template literals
- Destructuring and spread/rest operators
- Modules (import/export)
- Promises and async/await
- Classes and inheritance

### Advanced Concepts (Weeks 7-9)
- Higher-order functions and functional programming
- Prototypes and prototype chain
- Event loop and asynchronous JavaScript
- Design patterns (Module, Observer, Factory)
- Error handling and debugging

## JavaScript Tricks and Alternative Methods

### 1. Variable Declaration Alternatives

\`\`\`javascript
// ES5 - Function Scoped
var name = 'John';

// ES6 - Block Scoped
let name = 'John'; // Can be reassigned
const age = 25;    // Cannot be reassigned

// Destructuring Assignment
const user = { name: 'John', age: 25, city: 'NYC' };
const { name, age, city = 'Unknown' } = user;
\`\`\`

Master these JavaScript concepts to build efficient, maintainable, and scalable web applications.`,
    author: "Arju Singh",
    publishedAt: "2024-01-15", 
    category: "JavaScript",
    tags: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
    readTime: "22 min read",
    image: "https://images.unsplash.com/photo-1627399270231-7d36245355a9?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "React.js Complete Mastery: Hooks, State Management, and Performance",
    excerpt: "Complete React roadmap from components to advanced patterns, custom hooks, performance optimization, and state management solutions.",
    content: `React has transformed frontend development with its component-based architecture. This comprehensive guide covers React fundamentals to advanced optimization techniques.

## React Complete Syllabus

### Foundation (Weeks 1-2)
- Components and JSX syntax
- Props and state management
- Event handling and forms
- Conditional rendering and lists
- Component lifecycle concepts

### Hooks Era (Weeks 3-4)
- useState and useEffect hooks
- useContext for state sharing
- useReducer for complex state
- Custom hooks development
- Hook optimization patterns

### Advanced React (Weeks 5-6)
- Performance optimization (React.memo, useMemo, useCallback)
- Code splitting and lazy loading
- Error boundaries and error handling
- Advanced patterns (HOCs, Render Props, Compound Components)

## React Tricks and Alternative Methods

### 1. Component Definition Alternatives

\`\`\`jsx
// Function Component (Modern - Recommended)
const UserProfile = ({ user, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};
\`\`\`

Master these React patterns to build scalable, performant, and maintainable web applications.`,
    author: "Arju Singh",
    publishedAt: "2024-01-12",
    category: "React",
    tags: ["React", "Hooks", "Performance", "State Management"],
    readTime: "25 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Tailwind CSS Complete Guide: Utility-First Styling and Custom Configurations",
    excerpt: "Master Tailwind CSS with utility-first approach, responsive design, custom configurations, and component patterns for modern web development.",
    content: `Tailwind CSS revolutionizes how we write CSS with its utility-first approach. This comprehensive guide covers everything from basics to advanced customization.

## Tailwind CSS Complete Syllabus

### Foundation (Weeks 1-2)
- Utility-first CSS philosophy
- Installation and setup methods
- Core utilities: spacing, colors, typography
- Responsive design with breakpoints
- State variants (hover, focus, active)

### Intermediate (Weeks 3-4)
- Layout utilities (Flexbox, Grid)
- Component extraction patterns
- Custom color palettes and themes
- Dark mode implementation
- Animation and transition utilities

### Advanced (Weeks 5-6)
- Custom plugin development
- JIT (Just-In-Time) compiler
- Performance optimization
- Integration with build tools
- Component library creation

## Tailwind CSS Tricks and Alternative Methods

### 1. Layout Alternatives

\`\`\`html
<!-- Flexbox Layout -->
<div class="flex items-center justify-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold text-gray-800">Welcome</h1>
  </div>
</div>

<!-- Grid Layout -->
<div class="grid place-items-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold text-gray-800">Welcome</h1>
  </div>
</div>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>
\`\`\`

### 2. Component Patterns

\`\`\`html
<!-- Button Component Variations -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
  Primary Button
</button>

<button class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
  Secondary Button
</button>

<!-- Card Component -->
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Card Title
      </div>
      <p class="mt-2 text-slate-500">
        Card content goes here...
      </p>
    </div>
  </div>
</div>
\`\`\`

### 3. Custom Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
\`\`\`

### 4. Dark Mode Implementation

\`\`\`html
<!-- Toggle Dark Mode -->
<div class="bg-white dark:bg-gray-900 min-h-screen">
  <div class="text-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold">Hello World</h1>
    <p class="text-gray-600 dark:text-gray-300">
      This content adapts to dark mode
    </p>
  </div>
</div>

<!-- JavaScript Toggle -->
<script>
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

// Initialize theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
</script>
\`\`\`

Master Tailwind CSS to build beautiful, responsive, and maintainable user interfaces with utility-first styling approach.`,
    author: "Arju Singh",
    publishedAt: "2024-01-10",
    category: "Tailwind",
    tags: ["Tailwind CSS", "Utility-First", "Responsive Design", "Dark Mode"],
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Node.js Mastery: Server-Side JavaScript and Backend Development",
    excerpt: "Complete Node.js guide covering server-side JavaScript, event-driven architecture, NPM ecosystem, and building scalable backend applications.",
    content: `Node.js enables JavaScript on the server-side with its event-driven, non-blocking I/O model. This comprehensive guide covers Node.js fundamentals to advanced backend development.

## Node.js Complete Syllabus

### Foundation (Weeks 1-2)
- Node.js architecture and event loop
- Modules and CommonJS vs ES6 modules
- File system operations
- HTTP module and creating servers
- NPM package management

### Intermediate (Weeks 3-4)
- Asynchronous programming patterns
- Streams and buffers
- Error handling and debugging
- Environment variables and configuration
- Testing with Jest and Mocha

### Advanced (Weeks 5-6)
- Child processes and clustering
- Performance optimization
- Security best practices
- Memory management
- Production deployment

## Node.js Tricks and Alternative Methods

### 1. Module Systems

\`\`\`javascript
// CommonJS (Traditional)
const fs = require('fs');
const path = require('path');

function readConfig() {
  const configPath = path.join(__dirname, 'config.json');
  return JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

module.exports = { readConfig };

// ES6 Modules (Modern)
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function readConfig() {
  const configPath = path.join(__dirname, 'config.json');
  const data = await fs.readFile(configPath, 'utf8');
  return JSON.parse(data);
}
\`\`\`

### 2. Server Creation Alternatives

\`\`\`javascript
// HTTP Module (Basic)
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Express.js (Framework)
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Fastify (High Performance)
const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { message: 'Hello World' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
\`\`\`

### 3. File Operations

\`\`\`javascript
// Synchronous (Blocking)
const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// Asynchronous with Callbacks
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Asynchronous with Promises
const fsPromises = require('fs/promises');

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Streams for Large Files
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log(\`Received \${chunk.length} bytes\`);
});

readStream.on('end', () => {
  console.log('File reading completed');
});
\`\`\`

### 4. Environment and Configuration

\`\`\`javascript
// Using dotenv
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret'
};

// Configuration with validation
const joi = require('joi');

const envSchema = joi.object({
  NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
  PORT: joi.number().default(3000),
  DATABASE_URL: joi.string().required(),
  JWT_SECRET: joi.string().min(32).required()
});

const { error, value: config } = envSchema.validate(process.env);

if (error) {
  throw new Error(\`Config validation error: \${error.message}\`);
}
\`\`\`

Master Node.js to build scalable, efficient, and maintainable backend applications with server-side JavaScript.`,
    author: "Arju Singh",
    publishedAt: "2024-01-08",
    category: "Node.js",
    tags: ["Node.js", "Backend", "Server-Side", "JavaScript", "NPM"],
    readTime: "24 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Express.js Complete Guide: Web Framework and API Development",
    excerpt: "Master Express.js for building web applications and APIs. Learn middleware, routing, authentication, error handling, and production deployment.",
    content: `Express.js is the most popular web framework for Node.js. This comprehensive guide covers everything from basic routing to advanced middleware patterns.

## Express.js Complete Syllabus

### Foundation (Weeks 1-2)
- Express.js setup and basic routing
- Middleware concepts and usage
- Request and response objects
- Static file serving
- Template engines integration

### Intermediate (Weeks 3-4)
- Advanced routing patterns
- Authentication and authorization
- Session management
- File uploads and processing
- Error handling middleware

### Advanced (Weeks 5-6)
- Custom middleware development
- Security best practices
- Performance optimization
- Testing Express applications
- Production deployment strategies

## Express.js Tricks and Alternative Methods

### 1. Routing Alternatives

\`\`\`javascript
// Basic Routing
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/users', (req, res) => {
  res.json({ message: 'User created' });
});

// Router Module (Better Organization)
const express = require('express');
const router = express.Router();

// users.js router
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Route Parameters and Query Strings
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { page, limit } = req.query;
  
  res.json({
    userId,
    pagination: { page, limit }
  });
});

// Route with Multiple Parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});
\`\`\`

### 2. Middleware Patterns

\`\`\`javascript
// Built-in Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Third-party Middleware
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// Custom Middleware
const requestLogger = (req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.path}\`);
  next();
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Apply middleware
app.use(requestLogger);
app.use('/api/protected', authenticateToken);

// Route-specific middleware
app.get('/admin', authenticateToken, authorizeAdmin, (req, res) => {
  res.json({ message: 'Admin area' });
});
\`\`\`

### 3. Error Handling

\`\`\`javascript
// Custom Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// Async Error Handler
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage with asyncHandler
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    throw new AppError('User not found', 404);
  }
  
  res.json(user);
}));

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  let { statusCode = 500, message } = err;
  
  // MongoDB duplicate key error
  if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }
  
  // MongoDB validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }
  
  res.status(statusCode).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

// 404 Handler
app.all('*', (req, res, next) => {
  next(new AppError(\`Route \${req.originalUrl} not found\`, 404));
});

app.use(errorHandler);
\`\`\`

### 4. Authentication and Authorization

\`\`\`javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registration
app.post('/auth/register', asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  
  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('User already exists', 400);
  }
  
  // Hash password
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });
  
  // Generate token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
}));

// Login
app.post('/auth/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  // Find user and include password
  const user = await User.findOne({ email }).select('+password');
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError('Invalid email or password', 401);
  }
  
  // Generate token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
}));

// Role-based Authorization
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new AppError('Please log in to access this resource', 401);
    }
    
    if (!roles.includes(req.user.role)) {
      throw new AppError('You do not have permission to perform this action', 403);
    }
    
    next();
  };
};

// Usage
app.delete('/admin/users/:id', authenticateToken, authorize('admin'), deleteUser);
\`\`\`

Master Express.js to build robust, scalable web applications and APIs with proper routing, middleware, and security practices.`,
    author: "Arju Singh",
    publishedAt: "2024-01-05",
    category: "Express.js",
    tags: ["Express.js", "API", "Middleware", "Authentication", "Backend"],
    readTime: "26 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
  },
  {
    id: 8,
    title: "MongoDB Complete Guide: NoSQL Database and Document Storage",
    excerpt: "Master MongoDB with document-based storage, queries, aggregation pipelines, indexing, and database design patterns for web applications.",
    content: `MongoDB is a powerful NoSQL database that stores data in flexible, JSON-like documents. This comprehensive guide covers MongoDB from basics to advanced optimization.

## MongoDB Complete Syllabus

### Foundation (Weeks 1-2)
- NoSQL vs SQL concepts
- MongoDB installation and setup
- Documents, collections, and databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB Compass and Shell usage

### Intermediate (Weeks 3-4)
- Query operators and expressions
- Indexing and performance optimization
- Data modeling and schema design
- Aggregation framework basics
- Mongoose ODM integration

### Advanced (Weeks 5-6)
- Advanced aggregation pipelines
- Replication and sharding
- Security and authentication
- Performance monitoring and optimization
- Backup and recovery strategies

## MongoDB Tricks and Alternative Methods

### 1. Connection Alternatives

\`\`\`javascript
// Native MongoDB Driver
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('myapp');
    const collection = db.collection('users');
    
    // CRUD operations
    const result = await collection.insertOne({
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date()
    });
    
    console.log('User created:', result.insertedId);
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

// Mongoose ODM (Recommended)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/myapp');
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxLength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false // Don't include in queries by default
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual property
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

// Pre-save middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model('User', userSchema);
\`\`\`

### 2. Query Alternatives

\`\`\`javascript
// Basic Queries
// Find all users
const users = await User.find();

// Find with conditions
const activeUsers = await User.find({ isActive: true });

// Find one user
const user = await User.findById('64f1a2b3c4d5e6f7g8h9i0j1');
const userByEmail = await User.findOne({ email: 'john@example.com' });

// Query Operators
// Comparison operators
const adults = await User.find({ age: { $gte: 18 } });
const youngAdults = await User.find({ age: { $gte: 18, $lt: 30 } });
const specificRoles = await User.find({ role: { $in: ['admin', 'moderator'] } });

// Logical operators
const adminOrModerator = await User.find({
  $or: [
    { role: 'admin' },
    { role: 'moderator' }
  ]
});

const activeAdminUsers = await User.find({
  $and: [
    { isActive: true },
    { role: 'admin' }
  ]
});

// Element operators
const usersWithAge = await User.find({ age: { $exists: true } });
const stringEmails = await User.find({ email: { $type: 'string' } });

// Array operators
const tags = ['javascript', 'react', 'mongodb'];
const usersWithAllTags = await User.find({ skills: { $all: tags } });
const usersWithAnyTag = await User.find({ skills: { $in: tags } });

// Text Search
// First create text index
await User.createIndex({ name: 'text', bio: 'text' });

// Search
const searchResults = await User.find({ $text: { $search: 'developer' } });

// Sorting and Limiting
const latestUsers = await User.find()
  .sort({ createdAt: -1 })
  .limit(10)
  .select('name email createdAt');

// Pagination
const page = 2;
const limit = 10;
const skip = (page - 1) * limit;

const paginatedUsers = await User.find()
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit);

const totalUsers = await User.countDocuments();
const totalPages = Math.ceil(totalUsers / limit);
\`\`\`

### 3. Aggregation Pipeline

\`\`\`javascript
// Basic Aggregation
const userStats = await User.aggregate([
  // Match active users
  { $match: { isActive: true } },
  
  // Group by role and count
  {
    $group: {
      _id: '$role',
      count: { $sum: 1 },
      avgAge: { $avg: '$age' }
    }
  },
  
  // Sort by count descending
  { $sort: { count: -1 } }
]);

// Complex Aggregation with Lookup (Join)
const usersWithPosts = await User.aggregate([
  // Match active users
  { $match: { isActive: true } },
  
  // Lookup posts for each user
  {
    $lookup: {
      from: 'posts',
      localField: '_id',
      foreignField: 'author',
      as: 'posts'
    }
  },
  
  // Add computed fields
  {
    $addFields: {
      postCount: { $size: '$posts' },
      isAuthor: { $gt: [{ $size: '$posts' }, 0] }
    }
  },
  
  // Project specific fields
  {
    $project: {
      name: 1,
      email: 1,
      postCount: 1,
      isAuthor: 1,
      latestPost: { $arrayElemAt: ['$posts', -1] }
    }
  },
  
  // Sort by post count
  { $sort: { postCount: -1 } },
  
  // Limit results
  { $limit: 20 }
]);

// Date Aggregation
const monthlySignups = await User.aggregate([
  {
    $group: {
      _id: {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' }
      },
      count: { $sum: 1 },
      users: { $push: { name: '$name', email: '$email' } }
    }
  },
  {
    $sort: { '_id.year': -1, '_id.month': -1 }
  }
]);
\`\`\`

### 4. Performance Optimization

\`\`\`javascript
// Indexing Strategies
// Single field index
await User.createIndex({ email: 1 });

// Compound index
await User.createIndex({ role: 1, isActive: 1, createdAt: -1 });

// Text index for search
await User.createIndex({ name: 'text', bio: 'text' });

// Partial index (only index documents matching condition)
await User.createIndex(
  { email: 1 },
  { partialFilterExpression: { isActive: true } }
);

// TTL index (automatically delete documents after expiration)
await User.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 30 * 24 * 60 * 60 } // 30 days
);

// Query Optimization
// Use projection to limit returned fields
const users = await User.find({}, 'name email role');

// Use lean() for read-only operations (returns plain objects)
const plainUsers = await User.find().lean();

// Use explain() to analyze query performance
const explanation = await User.find({ role: 'admin' }).explain('executionStats');

// Batch operations for better performance
const bulkOps = [
  { updateOne: { filter: { _id: id1 }, update: { $set: { isActive: false } } } },
  { updateOne: { filter: { _id: id2 }, update: { $set: { role: 'admin' } } } }
];

await User.bulkWrite(bulkOps);

// Connection pooling configuration
mongoose.connect('mongodb://localhost:27017/myapp', {
  maxPoolSize: 10, // Maximum number of connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close connections after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
});
\`\`\`

Master MongoDB to build scalable, flexible, and high-performance database solutions for modern web applications.`,
    author: "Arju Singh",
    publishedAt: "2024-01-03",
    category: "MongoDB",
    tags: ["MongoDB", "NoSQL", "Database", "Mongoose", "Aggregation"],
    readTime: "28 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop"
  }
];

export const mockCategories = [
  "All",
  "HTML",
  "CSS", 
  "JavaScript",
  "React",
  "Tailwind",
  "Node.js",
  "Express.js",
  "MongoDB"
];

export const featuredPost = mockBlogPosts[0];

// All posts combined
export const allPosts = mockBlogPosts;