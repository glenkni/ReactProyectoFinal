import React from 'react'
import {Link} from 'react-router-dom'

const categories = [{
    categoryId: "Exterior",
    name: "Exterior"
},{
    categoryId:"Living",
    name:"Living"
},{
    categoryId:"Comedor",
    name:"Comedor"
},{
    categoryId: "Habitacion",
    name: "Habitacion"
}]

const NavBar = () => {
    return (
        
        <nav className="navbar sticky-top navbar-expand-md shadow" style={{backgroundColor:'white'}}>
        <div>
            <Link to={"/"}>
                <img
                    alt="logo foni muebles"
                    src="https://i.ibb.co/Yk5mKyS/fonimuebles.jpg"
                    width="100"
                    height="75"
                    className="d-inline-block align-top"
                /> 
            </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end">
            { categories.map( category => <Link className="text-dark p-2" to={`/category/${category.categoryId}`}><p>{category.name}</p> </Link>)} 
        </div>
        <div>
            <Link to={"/cart"}>
                        <img 
                            alt="carrito" 
                            src="https://i.ibb.co/BP5pwhF/streamline-icon-shopping-cart-1-140x140.png"
                            width="30"
                            height="30"/>
            </Link>
        </div>
    </nav>
    )
}

export default NavBar
