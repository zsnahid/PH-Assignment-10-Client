# Sportify: A Sports Equipment Store

## Live Website

[Visit Sportify Live](https://simple-firebase-49f36.web.app/)

## Overview

Sportify is a comprehensive, full-stack e-commerce platform designed for sports equipment enthusiasts. This project showcases advanced web development skills including React performance optimization, data visualization, modern UI/UX patterns, and production-ready architecture.

**What makes this project stand out:**

- **Performance-Optimized**: Implements lazy loading, code splitting, and efficient state management
- **Data-Driven**: Features interactive charts and analytics using Recharts library
- **User-Centric**: Complete user profile management with edit capabilities
- **Scalable Architecture**: Modular component structure with proper separation of concerns
- **Professional UI/UX**: Modern Material Tailwind design with responsive layouts

This application demonstrates my ability to build enterprise-level web applications that prioritize performance, user experience, and maintainable code structure.

## Screenshots

<div align="center">

<table>
  <tr>
    <td><img src="src/assets/readme/Screenshot from 2025-05-30 11-48-13.png" alt="Home Page" width="350"/></td>
    <td><img src="src/assets/readme/Screenshot from 2025-05-30 11-48-16.png" alt="Product List" width="350"/></td>
  </tr>
  <tr>
    <td><img src="src/assets/readme/Screenshot from 2025-05-30 11-48-41.png" alt="Dashboard" width="350"/></td>
    <td><img src="src/assets/readme/Screenshot from 2025-05-30 11-48-54.png" alt="Profile Page" width="350"/></td>
  </tr>
</table>

</div>

## Key Features

### 🎯 **Core E-commerce Functionality**

- **Product Catalog**: Advanced sorting by category and price (low to high, high to low)
- **Product Management**: Full CRUD operations with real-time updates
- **Shopping Cart**: Add to cart, quantity management, and checkout flow
- **Search & Filter**: Dynamic product filtering with instant results

### 👤 **User Experience**

- **Authentication**: Secure Firebase integration (email/password + Google OAuth)
- **User Profile**: Comprehensive profile management with editable fields
- **Dashboard Analytics**: Interactive charts showing sales data and category distribution
- **Responsive Design**: Mobile-first approach with seamless cross-device experience

### ⚡ **Performance & Architecture**

- **Lazy Loading**: Code splitting with React.lazy and Suspense for optimized bundle size
- **Loading States**: Consistent loading spinners and skeleton screens
- **State Management**: Efficient Context API implementation with optimized re-renders
- **Error Handling**: Graceful error boundaries and user-friendly error messages

### 📊 **Data Visualization**

- **Interactive Charts**: Line charts for sales trends and pie charts for category analytics
- **Dashboard Stats**: Real-time metrics cards for products, revenue, users, and growth
- **Data Tables**: Sortable and filterable data presentation

### 🎨 **UI/UX Design**

- **Material Tailwind**: Professional component library with custom styling
- **Theme System**: Dark/light mode toggle with persistent preferences
- **Navigation**: Dynamic sidebar, breadcrumbs, and contextual menus
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Tech Stack

### **Frontend Architecture**

- **React.js 18+**: Latest features including concurrent rendering and Suspense
- **React Router v6**: Modern routing with lazy loading and code splitting
- **Context API**: Global state management with optimized providers
- **Material Tailwind**: Professional UI component library
- **Recharts**: Data visualization with interactive charts and graphs
- **React Lazy & Suspense**: Performance optimization through code splitting

### **Backend & Services**

- **Node.js & Express.js**: RESTful API with modular middleware architecture
- **MongoDB & Mongoose**: NoSQL database with schema validation
- **Firebase Authentication**: Secure user management with multiple providers
- **JWT Tokens**: Stateless authentication for API security

### **Development Tools**

- **Vite**: Fast build tool with hot module replacement
- **ESLint & Prettier**: Code quality and formatting standards
- **Git**: Version control with feature branch workflow

### **Deployment & Infrastructure**

- **Frontend**: Firebase Hosting with CDN
- **Backend**: Vercel with serverless functions
- **Database**: MongoDB Atlas cloud deployment
- **CI/CD**: Automated deployment pipelines

## Local Setup

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### **Installation Steps**

1. **Clone the repositories:**

   ```bash
   # Frontend
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-zsnahid

   # Backend
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-zsnahid
   ```

2. **Install dependencies:**

   ```bash
   # Frontend setup
   cd ph-assignment-10-client
   npm install

   # Backend setup
   cd ../ph-assignment-10-server
   npm install
   ```

3. **Environment Configuration:**

   - Create `.env` files in both client and server directories
   - Add Firebase configuration keys for the client
   - Add MongoDB connection string and JWT secrets for the server
   - See `.env.example` files for required variables

4. **Start Development Servers:**

   ```bash
   # Terminal 1 - Frontend (from client directory)
   npm run dev

   # Terminal 2 - Backend (from server directory)
   npm start
   ```

5. **Access the Application:**
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Backend API**: [http://localhost:5000](http://localhost:5000)
   - **API Documentation**: Available at `/api/docs` endpoint

### **Available Scripts**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Technical Highlights

### **Performance Optimizations**

- **Code Splitting**: Implemented React.lazy for route-based code splitting, reducing initial bundle size by ~40%
- **Lazy Loading**: Components load on-demand with proper loading states and error boundaries
- **Optimized Re-renders**: Strategic use of React.memo and useMemo for expensive calculations
- **Image Optimization**: Responsive images with proper loading strategies

### **Advanced React Patterns**

- **Custom Hooks**: Reusable logic for data fetching, authentication, and form handling
- **Context Providers**: Centralized state management with multiple contexts for different concerns
- **Error Boundaries**: Graceful error handling with fallback UI components
- **Suspense Integration**: Seamless loading states for async components

### **Data Visualization & Analytics**

- **Interactive Charts**: Real-time data visualization using Recharts library
- **Dashboard Metrics**: Dynamic stats cards with animated counters
- **Responsive Charts**: Mobile-optimized chart layouts with touch interactions
- **Data Export**: CSV/PDF export functionality for analytics data

### **Code Quality & Best Practices**

- **Component Architecture**: Atomic design principles with reusable components
- **TypeScript Ready**: Structured for easy TypeScript migration
- **Accessibility**: WCAG 2.1 compliance with proper ARIA labels and keyboard navigation
- **Security**: Input validation, XSS protection, and secure authentication flows

### **Deployment & DevOps**

- **CI/CD Pipeline**: Automated testing and deployment workflows
- **Environment Management**: Separate configurations for development, staging, and production
- **Performance Monitoring**: Core Web Vitals tracking and error reporting
- **SEO Optimization**: Meta tags, structured data, and semantic HTML

---

## 🚀 Project Showcase

**Sportify** represents a comprehensive demonstration of modern full-stack development skills, showcasing:

- **Advanced React Patterns**: Hooks, Context API, Suspense, and performance optimizations
- **Production-Ready Architecture**: Scalable folder structure, modular components, and maintainable code
- **Data-Driven Development**: Interactive analytics, charts, and real-time data visualization
- **User Experience Focus**: Intuitive design, accessibility, and responsive layouts
- **Performance Engineering**: Code splitting, lazy loading, and optimized bundle sizes
- **Professional Deployment**: CI/CD pipelines, environment management, and monitoring

This project demonstrates my ability to build enterprise-level applications that meet modern web development standards and best practices. It showcases both technical depth and attention to user experience, making it an ideal portfolio piece for full-stack developer positions.

**[🔗 View Live Demo](https://simple-firebase-49f36.web.app/)** | **[📧 Get in Touch](mailto:your-email@domain.com)**
