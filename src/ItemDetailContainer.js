import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'


const products = [{
    id: "A",
    name: "Mesa de comedor",
    stock: 4,
    description: "Mesa de comedor con base de hierro para 6 comensales",
    categoryId: "Comedor",
    initial: 1,
    price: 10000,
    imagen: "https://i.ibb.co/w4K3nsJ/mesacomedor.jpg"
}, {
    id: "B",
    name: "Mesa ratona",
    stock: 5,
    description: "Mesa ratona de petiribi con based de hierro",
    categoryId: "Living",
    initial: 1,
    price: 7000,
    imagen: "https://i.ibb.co/rbHgj66/mesaratona.jpg"
}, {
    id: "C",
    name: "Silla exterior",
    stock: 8,
    description: "Sillas bajas para exterior con hierro",
    categoryId: "Exterior",
    initial: 1,
    price: 4000,
    imagen: "https://i.ibb.co/C5RcSB2/sillasexterior.jpg"
}, {
    id: "D",
    name: "Estante con perchero",
    stock: 3,
    description: "Estante de madera con perchero",
    categoryId: "Living",
    initial: 1,
    price: 3000,
    imagen: "https://i.ibb.co/zSbhd61/estante.jpg"
}, {
    id: "E",
    name: "Mesa de luz",
    stock: 4,
    description: "Mesas de luz flotantes de madera",
    categoryId: "Habitacion",
    initial: 1,
    price: 3500,
    imagen: "https://i.ibb.co/h9nqBgH/mesadeluz.jpg"
}, {
    id: "F",
    name: "Cama",
    stock: 4,
    description: "Cama marinera de una plaza",
    categoryId: "Habitacion",
    initial: 1,
    price: 8000,
    imagen: "https://i.ibb.co/YBxSXkw/camamarinera.jpg"
}, {
    id: "G",
    name: "Sillas",
    stock: 10,
    description: "Sillas de madera para comedor",
    categoryId: "Comedor",
    initial: 1,
    price: 3000,
    imagen: "https://i.ibb.co/XXLMsxt/sillascom.jpg"
}, {
    id: "H",
    name: "Rack TV",
    stock: 2,
    description: "Pack para TV de madera y hierro",
    categoryId: "Living",
    initial: 1,
    price: 30000,
    imagen: "https://i.ibb.co/xgm95dw/racktv.jpg"
}
]


const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const {id} = useParams()


    useEffect(() => {
        
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            
            const i = products.find(product => product.id === (id))
            resolve(i); 
        }, 2000);
        }
        )
        
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);



    return (
        <div>
            {item 
            ? <ItemDetail id={item.id} item={item} name={item.name} initial={item.initial} price={item.price} imagen={item.imagen} description={item.description} stock={item.stock}/>
            : <h4> Cargando ... </h4>
            }
            
        </div>
    )
}

export default ItemDetailContainer
