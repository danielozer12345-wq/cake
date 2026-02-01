import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { myContext } from '../context/MyContext'

const Header = (props) => {
  const { products } = useContext(myContext);
  const totalItems = products.reduce((sum, item) => sum + (item.count || 0), 0);

  return (
    <header className="main-header" dir="rtl">
      <h1 className="header-title" style={{ margin: 0 }}>{props.title}</h1>
      <nav className="header-nav">
        <NavLink className="link-with-icon" to="/" title="בית">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </NavLink>
        <NavLink className="link-with-icon" to="/gallery" title="גלריה">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
        </NavLink>
        <NavLink className="link-with-icon" to="/shoppingCart" title="עגלה">
          <div className="cart-link-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </NavLink>
        <NavLink className="link-with-icon" to="/contact" title="צור קשר">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header