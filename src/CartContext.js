import React, { useState, useEffect } from 'react'


export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()

   
    useEffect(() => {
        var t = 0
        const totals = cart.map( p => p.price * p.amount)
        totals.map( p => t = t + p)
        setTotal(t)
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])

    function isInCart(id){
        const item = cart.find(p => p.id === id)
            if (item === undefined){
                return false
            } else 
            { return true
        }
    }

    function addToCart(product, counter, id) {
         
        if (isInCart(id)){
            const prodAgregado = cart.find(p => p.id === id)
            const newQuantity = prodAgregado.amount + counter           
            const newProduct = { id: prodAgregado.id, name: prodAgregado.name, image: prodAgregado.image, price: prodAgregado.price, amount: newQuantity}
            const carritoAgregado = cart.filter(product => product.id =! id)
            const carrConNuevo = [...carritoAgregado, newProduct]
            setCart(carrConNuevo)            
        } else {
            const nuevoItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: counter }
            setCart([...cart, nuevoItem]) 
        }
    }

    function eliminateFromCart(id){
        const nuevoCarrito = cart.filter(product => product.id !== id)
        setCart(nuevoCarrito)
    }

    function clearCart(){
        setCart([])
        setQuantity(0)
    }

    return (
     
            <CartContext.Provider value ={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;