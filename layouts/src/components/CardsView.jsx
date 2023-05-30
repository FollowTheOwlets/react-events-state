import React from 'react'
import { Card } from './Card'

export const CardsView = ({ products }) => {
    return (
        <div className='cards-view'>
            {products.map(product => <Card key={product.name + product.color} product={product} />)}
        </div>
    )
}
