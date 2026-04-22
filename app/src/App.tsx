import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrandMark } from '@/components/Brand';
import { brand } from '@/lib/brand';
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
          <BrandMark className="mx-auto mb-5 h-16 w-16" decorative={false} />
          <div className="mb-4 text-2xl font-semibold text-white">{brand.companyName}</div>
          <div className="w-32 h-px bg-white/20 mx-auto overflow-hidden">
            <div
              className="w-full h-full animate-[slideInLeft_1s_ease-in-out_infinite]"
              style={{ background: 'linear-gradient(90deg, #ff8a00 0%, #149ce6 100%)' }}
            />
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
