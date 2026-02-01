import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="page-container" dir="rtl">
            <Header title="Lustré Pâtisserie" />

            <main className="contact-container">
                {/* Right Side - Info */}
                <div className="contact-info-side">
                    <div>
                        <h1 className="contact-title">צרו קשר</h1>
                        <p className="contact-subtitle">
                            נשמח לשמוע מכם! בין אם מדובר בהזמנה מיוחדת לאירוע, שאלה על הקולקציה שלנו או סתם רצון לשתף בחוויה מתוקה.
                        </p>
                    </div>

                    <div className="contact-details">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="detail-text">
                                <h4>טלפון</h4>
                                <p>050-000-0000</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <div className="detail-text">
                                <h4>אימייל</h4>
                                <p>hello@lustre-cakes.co.il</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="detail-text">
                                <h4>כתובת</h4>
                                <p>שדרות רוטשילד 1, תל אביב</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Side - Form */}
                <div className="contact-form-side">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>שם מלא</label>
                            <input type="text" className="form-input" placeholder="איך לקרוא לכם?" />
                        </div>
                        <div className="form-group">
                            <label>אימייל</label>
                            <input type="email" className="form-input" placeholder="כתובת אימייל לחזרה" />
                        </div>
                        <div className="form-group">
                            <label>הודעה</label>
                            <textarea className="form-input" placeholder="ספרו לנו הכל..."></textarea>
                        </div>
                        <button type="submit" className="gold-btn" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>שלח הודעה</button>
                    </form>
                </div>
            </main>

            <section className="map-section">
                <iframe
                    title="Business Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.763912745132!2d34.80425984184804!3d32.054969745299026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b0e4fbb2c37%3A0x799cbcd583706fb3!2z157Xm9ec15zXqiDXkNeV16jXmCDXodeZ16DXkteQ15zXldeR16HXp9eZINeq15wg15DXkdeZ15EgLSDXnNeZ157XldeT15kg15TXoNeT16HXkNeZ150g15XXnNeZ157XldeT15kg16rXoteV15PXlA!5e0!3m2!1siw!2sil!4v1769938040480!5m2!1siw!2sil"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
