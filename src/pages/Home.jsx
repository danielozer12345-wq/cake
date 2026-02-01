import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-container">
      <Header title="Lustré Pâtisserie" />

      <main className="hero-section">
        <div className="floating-box" dir="rtl">
          <span className="hero-subtitle">Boutique d'Élite</span>
          <h1 className="hero-title">היכן שהחלום <br />פוגש את הטעם.</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#666', fontWeight: 300 }}>
            קולקציית עוגות מעוצבות בעבודת יד, המשלבות חומרי גלם נדירים עם תשוקה לאמנות האפייה.
          </p>
          <Link to="/gallery" className="gold-btn">לצפייה בקולקציה</Link>
        </div>
      </main>

      <section className="main-content" dir="rtl" style={{ padding: '5rem 10%' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', color: '#c5a059', marginBottom: '2rem' }}>חוויה של פעם בחיים</h2>
          <p className="description-text" style={{ background: 'transparent', boxShadow: 'none', border: 'none', textAlign: 'center', fontSize: '1.3rem' }}>
            כל עוגה ב-Lustré מספרת סיפור. מהשוקולד הבלגי המשובח ביותר ועד לפירות היער הטריים שנבצרו הבוקר,
            אנחנו לא מתפשרים על פחות משלמות. היצירות שלנו הן הלב של כל אירוע יוקרתי.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
