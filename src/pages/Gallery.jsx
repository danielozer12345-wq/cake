import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import cakesArr from '../data/cakes.json'
import { myContext } from '../context/MyContext'

const Gallery = () => {
  const { addProducts } = useContext(myContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [maxPrice, setMaxPrice] = useState(100)
  const [maxCalories, setMaxCalories] = useState(1000)
  const [sortBy, setSortBy] = useState('none')

  // Logic for filtering and sorting
  const filteredCakes = React.useMemo(() => {
    return cakesArr
      .filter(cake => {
        const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cake.ingredients.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = parseFloat(cake.price) <= maxPrice;
        const matchesCalories = parseInt(cake.calories) <= maxCalories;
        return matchesSearch && matchesPrice && matchesCalories;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
        if (sortBy === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
        if (sortBy === 'calories') return parseInt(a.calories) - parseInt(b.calories);
        return 0;
      });
  }, [searchTerm, maxPrice, maxCalories, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setMaxPrice(100);
    setMaxCalories(1000);
    setSortBy('none');
  };

  return (
    <div className="page-container">
      <Header title="הגלריה המתוקה שלנו" />

      <div className="filter-container" dir="rtl">
        <div className="search-box">
          <div className="search-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <input
            type="text"
            placeholder="חפשו עוגות מופלאות או רכיבים..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="advanced-filters">
          <div className="filter-group">
            <label>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              מחיר מקסימלי: {maxPrice}₪
            </label>
            <input
              type="range"
              min="30"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1 -14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
              קלוריות מקסימליות: {maxCalories}
            </label>
            <input
              type="range"
              min="200"
              max="1000"
              step="50"
              value={maxCalories}
              onChange={(e) => setMaxCalories(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="4" x2="14" y2="4"></line><line x1="21" y1="12" x2="14" y2="12"></line><line x1="21" y1="20" x2="14" y2="20"></line><line x1="3" y1="8" x2="3" y2="16"></line><path d="m10 16-3 3-3-3"></path><path d="m10 8-3-3-3 3"></path></svg>
              מיון לפי:
            </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="none">לפי סדר רגיל</option>
              <option value="price-low">מחיר: מהזול ליקר</option>
              <option value="price-high">מחיר: מהיקר לזול</option>
              <option value="calories">לפי רמת קלוריות</option>
            </select>
          </div>

          <button className="reset-btn" onClick={resetFilters}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            איפוס
          </button>
        </div>
      </div>

      <main className='mainGallery'>
        {
          filteredCakes.length > 0 ? (
            filteredCakes.map((item, index) => {
              return <Card key={item.id} name={item.name} pic={item.pic} price={item.price} calories={item.calories} ingredients={item.ingredients} func={() => addProducts(item)} />
            })
          ) : (
            <div className="no-results">לא נמצאו עוגות שתואמות לחיפוש... נסו פילטרים אחרים!</div>
          )
        }
      </main>
      <Footer />
    </div>
  )
}
export default Gallery
