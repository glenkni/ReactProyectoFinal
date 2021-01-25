import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar"
import './style.css'
import Main from './Main';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer'
import CartProvider from './CartContext';
import Cart from './Cart'

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>    
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route exact path="/category/:id">
                            <ItemListContainer/>
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                   
                </BrowserRouter>
            </CartProvider>    
        </>
    )
}

export default App
