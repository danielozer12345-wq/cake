import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { useState } from 'react'
import ShoppingCart from './pages/ShoppingCart'
import { myContext } from './context/MyContext'
function App() {
  const [products, setProducts] = useState([])

  const addProducts = (product) => {
    setProducts(prevProducts => {
      const existing = prevProducts.find(item => item.id === product.id);
      if (existing) {
        return prevProducts.map(item =>
          item.id === product.id ? { ...item, count: (item.count || 1) + 1 } : item
        );
      }
      return [...prevProducts, { ...product, count: 1 }];
    });
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  }

  const updateQuantity = (id, newCount) => {
    if (newCount < 1) return;
    setProducts(prevProducts =>
      prevProducts.map(item => item.id === id ? { ...item, count: newCount } : item)
    );
  }

  const totalAmount = products.reduce((sum, item) => sum + (parseFloat(item.price) * (item.count || 1)), 0);

  return (
    <>
      <HashRouter>
        <myContext.Provider value={{ addProducts, deleteProduct, updateQuantity, products, totalAmount }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </myContext.Provider>
        <a
          href="https://wa.me/972500000000"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          title="שלחו לנו הודעה בוואטסאפ"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </HashRouter>
    </>
  )
}
export default App
