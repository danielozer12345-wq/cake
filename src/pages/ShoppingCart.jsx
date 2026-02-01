import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { myContext } from '../context/MyContext'
import TableRow from '../components/TableRow'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  const { products, deleteProduct, updateQuantity, totalAmount } = useContext(myContext);

  return (
    <div className="cart-page">
      <Header title="Lustré Pâtisserie" />

      <main className="cart-container" dir="rtl">
        <h2 className="cart-title">סל הקינוחים שלך</h2>

        {products.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>תמונה</th>
                  <th>שם המוצר</th>
                  <th>מחיר</th>
                  <th>כמות</th>
                  <th>סה"כ</th>
                  <th>פעולות</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <TableRow
                    key={item.id}
                    id={item.id}
                    pic={item.pic}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    onUpdate={(newCount) => updateQuantity(item.id, newCount)}
                    onDelete={() => deleteProduct(item.id)}
                  />
                ))}
              </tbody>
            </table>

            <div className="cart-total-section">
              <div>
                <span className="total-label">סה"כ לתשלום</span>
                <div className="total-amount">{totalAmount.toFixed(2)}₪</div>
              </div>
              <button className="checkout-btn">המשך לתשלום מאובטח</button>
            </div>
          </>
        ) : (
          <div className="empty-cart-box">
            <h3>הסל שלך נראה קצת בודד... 🍰</h3>
            <p style={{ marginBottom: '2rem', color: '#888' }}>הוסיפו כמה מהיצירות שלנו כדי להתחיל בחגיגה.</p>
            <Link to="/gallery" className="gold-btn">חזרה לגלריה</Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ShoppingCart