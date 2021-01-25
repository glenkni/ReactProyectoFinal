import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function Cart() {
   
    const { cart, clearCart, total } = useContext(CartContext)

    
    return (
        <div>
            { cart.length > 0 ? (
            <h4>Tenes que elegir tus productos!</h4>
            )    
            :
            ( <>
            <h4 className="text-center p-4">Para avanzar tenes que elegir al menos 1 producto!</h4>
                <Link to={"/"}>
                    <Button onClick={clearCart} variant="secondary"> Ver todos los productos </Button>
                </Link>
            </>
            )
            }
            <div>
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>
            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div>
                <Button onClick={clearCart} color="secondary"> Vaciar carrito </Button>
                <Button onClick={() => {console.log(cart)}} color="secondary"> Pagar </Button>
            </div>
            </>}


        </div>
    )
}

export default Cart