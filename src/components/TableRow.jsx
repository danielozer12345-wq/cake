import React from 'react'
const TableRow = (props) => {
    return (
        <tr className="cart-row">
            <td>
                <div className="cart-item-img-wrapper">
                    <img src={props.pic} alt={props.name} className="cart-item-img" />
                </div>
            </td>
            <td className="cart-item-name">{props.name}</td>
            <td className="cart-item-price">{props.price}₪</td>
            <td>
                <input
                    type="number"
                    className="count-input"
                    value={props.count}
                    min="1"
                    onChange={(e) => props.onUpdate(parseInt(e.target.value) || 1)}
                />
            </td>
            <td className="cart-item-total">{(parseFloat(props.price) * props.count).toFixed(2)}₪</td>
            <td>
                <button onClick={props.onDelete} className="del-btn" title="מחק מוצר">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
            </td>
        </tr>
    )
}

export default TableRow
