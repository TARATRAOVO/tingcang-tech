import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from '@/components/ui/sonner';

type PageType = 'home' | 'product' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'product':
        return <Product />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-4">
            抱朴<span className="text-blue-400">科技</span>
          </div>
          <div className="w-32 h-px bg-white/20 mx-auto overflow-hidden">
            <div className="w-full h-full bg-blue-400 animate-[slideInLeft_1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black noise-overlay">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="transition-opacity duration-300">
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
