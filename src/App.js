import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import Checkout from './pages/Checkout';

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.hash.slice(1) || '');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'cart':
        return <Cart />;
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'checkout':
        return <Checkout />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
};

export default App;