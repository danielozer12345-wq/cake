import React, { useState } from 'react'
const Card = (props) => {
    const [showIngredients, setShowIngredients] = useState(false);

    return (
        <div className="cake-card">
            <div className="card-image-container">
                <img src={props.pic} alt="Cake" className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="cake-name">{props.name}</h3>

                <div className="cake-info">
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span className="info-label">מחיר:</span>
                    </div>
                    <span className="info-value">{props.price}₪</span>
                </div>

                <div className="cake-info">
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1 -14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                        <span className="info-label">קלוריות:</span>
                    </div>
                    <span className="info-value">{props.calories}</span>
                </div>

                <div className="cake-info toggle-ingredients" onClick={() => setShowIngredients(!showIngredients)} style={{ cursor: 'pointer' }}>
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon" style={{ transform: showIngredients ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        <span className="info-label">רכיבים:</span>
                    </div>
                    <span className="info-value" style={{ fontSize: '0.7rem', color: 'var(--primary-gold)' }}>{showIngredients ? 'לחץ לסגירה' : 'לחץ לצפייה'}</span>
                </div>

                <div className={`ingredients-wrapper ${showIngredients ? 'expanded' : ''}`}>
                    <p className="ingredients-list">{props.ingredients}</p>
                </div>

                <button onClick={props.func} className="add-to-cart-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    הוספה לסל
                </button>
            </div>
        </div>
    )
}
export default Card
