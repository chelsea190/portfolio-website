import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  if (currentPage === '404') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <NotFound onNavigateHome={() => setCurrentPage('home')} />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;