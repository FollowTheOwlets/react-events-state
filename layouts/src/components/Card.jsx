import React from 'react'

export const Card = ({ product }) => {
    const { name, price, color, img } = product;
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__name">{name}</div>
                <div className="card__color">{color}</div>
                <div className="card__footer">
                    <div className="card__price">{price}$</div>
                    <button className="card__add-button">ADD TO CART</button>
                </div>
            </div>
            <img className="card__img" src={img} alt={img} />
        </div>
    )
}
