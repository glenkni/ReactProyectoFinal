import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

    

    return (
        <div>
            {products.map(product => <Item key={product.id} id={product.id} name={product.name} price={product.price} imagen={product.imagen} />)}
            
        </div>
    )
}

export default ItemList
