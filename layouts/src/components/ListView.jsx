import React from 'react'
import { ListItem } from './ListItem'

export const ListView = ({ products }) => {
    return (
        <div class="list-items-view">
            {products.map(product => <ListItem key={product.name + product.color} product={product} />)}
        </div>
    )
}
