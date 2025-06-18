import React from "react";
import "../App.css"

const clients = [
    {
        id: "01",
        name: "Mastering Baroque",
        price: "₹100000",
        img: "https://theartchi.com/cdn/shop/articles/vermeer-min.jpg?v=1703223950&width=2048"
    },
    {
        id: "02",
        name: "Monalisa",
        price: "₹120000",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xD-Fw2ocpwB3GVe8JPDsF36Cf-HzKrKXkA&s"
    },
    {
        id: "03",
        name: "Rau Antiques",
        price: "₹200000",
        img:"https://cdn.shopify.com/s/files/1/0083/2471/0466/files/Van_Gogh_Self_Portrait_600x600.jpg?v=1665766905"
    },
    {
        id: "04",
        name: "Fraderic Magazine",
        price: "₹250000",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtZRdwKpp-ujHCBfGQnnnlP2ck3JD6J50sg&s"
    }
   
    
    
    
]

function Card(){
    return(
        <div className="card-container">
            {clients.map((client)=> (

                <div className="card" key={client.id}>
                         <p className="card-id">{client.id}</p>

                    <img className="card-img" src={client.img} alt={client.img} />
                    <div className="card-list">
                        <h2 className="card-name">{client.name}</h2>
                        
                            <p className="card-price">{client.price}</p>
                           
                    </div>

            </div>))}    
        </div>
    )
}

export default Card
