import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button'
import Cart from './Cart';

const ItemCount = ({ item, id, add, substract, counter }) => {
    const [ open, setOpen ] = useState(false)

    const { addToCart } = useContext(CartContext)
    
    function addAndOpen(item, counter, id){
        addToCart(item, counter, id);
        setOpen(true)
    }
    return (
        <div>
            <div>
                <Button variant="secondary" onClick={substract}> - </Button>
                    <h4>{counter}</h4>
                <Button variant="secondary" onClick={add}> + </Button>
            </div>
            { !open 
            ? (<div>
                <Button variant="contained" color="primary" onClick={ () => addAndOpen(item, counter, id)}> <h4>Agregar al <Cart/> </h4>
                </Button>
            </div>) 
            : (<div>
                <Link to="/cart">
                    <Button variant="secondary" >
                        <h3>Terminar la compra</h3>
                    </Button>
                </Link>
            </div>) }
        </div>
    )
}

export default ItemCount
