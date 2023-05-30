import React from 'react'

export const ListItem = ({ product }) => {
    const { name, price, color, img } = product;
    return (
        <div className="list-item">
            <img className="list-item__img" src={img} alt={img} />
            <div className="list-item__name">{name}</div>
            <div className="list-item__color">{color}</div>
            <div className="list-item__price">{price}$</div>
            <button className="list-item__add-button">ADD TO CART</button>
        </div>
    )
}
