import React, { useContext } from 'react';
import { CartContext } from './CartContext'
import Button from 'react-bootstrap/Button'

function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <div className="d-flex flex-column">
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h4>${price}</h4>
            </div>
            <div>
                <h4>{amount}</h4>
            </div>
            <div>
                <h4>${amount*price}</h4>
            </div>
            <Button onClick={ () => eliminateFromCart(id)} variant="contained" color="primary">
                Eliminar
            </Button>
        </div>
    )
}

export default CartItem