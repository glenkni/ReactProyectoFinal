import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

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

const ItemListContainer = () => {

    const [items, setItems] = useState(0);
    const {id} = useParams()

    useEffect (()=> {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout (()=>{
                resolve(products)
            },2000)

        }
    
        )
        promesa
            .then(res=> {
                if(id) {
                    setItems(res.filter(item=>item.categoryId===id))
                }else{
                    setItems(res)
                }
            })
            .catch(res=> "algo salio mal")

    }, [id])

    console.log(products)
    

    return (
        <div>
            <h4>Lista de Productos</h4>


            {products.length > 0 ? <ItemList products={items} /> : <p>Cargando productos...</p>}           
        </div>
    )
}

export default ItemListContainer
