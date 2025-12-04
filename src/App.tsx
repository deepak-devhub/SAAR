import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
import Consultancy from './pages/Consultancy';
import Academy from './pages/Academy';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const, // Smooth cinematic easing
    },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Page content wrapper that ensures content is always visible (navbar stays outside)
function PageContentWrapper({ children, pathname }: { children: ReactNode; pathname: string }) {
  useEffect(() => {
    // Fallback: ensure page content is visible after a short delay
    const timer = setTimeout(() => {
      const element = document.querySelector(`[data-page-content="${pathname}"]`);
      if (element) {
        (element as HTMLElement).style.opacity = '1';
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      data-page-content={pathname}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/landing" element={
          <AnimatePresence mode="wait">
            <motion.div
              key="landing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 z-[100]"
            >
              <Landing />
            </motion.div>
          </AnimatePresence>
        } />
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/home" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Home /></PageContentWrapper>} />
        } />
        <Route path="/about" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><About /></PageContentWrapper>} />
        } />
        <Route path="/divisions" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Divisions /></PageContentWrapper>} />
        } />
        <Route path="/consultancy" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Consultancy /></PageContentWrapper>} />
        } />
        <Route path="/academy" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Academy /></PageContentWrapper>} />
        } />
        <Route path="/projects" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Projects /></PageContentWrapper>} />
        } />
        <Route path="/careers" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Careers /></PageContentWrapper>} />
        } />
        <Route path="/contact" element={
          <Layout pageContent={<PageContentWrapper pathname={location.pathname}><Contact /></PageContentWrapper>} />
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
