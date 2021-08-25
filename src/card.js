import React from "react"
import Cartcontext from "./cartcontext";
import { useContext } from "react";
import './App.css';
export default function Card({product,handleCart,handleIncrease,handleDecrease}) {
    const [disable, setDisable] = React.useState(false);
    const{cartList,setCartlist}=useContext(Cartcontext);
    return (
        <div className="col-lg-4">
            <div className="card" >
                <img src={product.productImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name :{product.productName}</h5>
                        <p className="card-text">{product.quantity}</p>
                        <p className="card-text">Rs :{product.price}</p>
                        <button href="#" className="btn btn-primary"  disabled={product.quantity>1}  onClick={ () => {handleCart(product.id);setDisable(true)}} >add to cart</button>
                        <div>
                        <button href="#" className="btn-addqnty" onClick={ () => handleIncrease(product.id)}>+</button>
                        <button href="#" className="btn-removeqnty" disabled={product.quantity==0}  onClick={ () => {handleDecrease(product.id);setDisable(true)}} >- </button>
                        </div>
                    </div>
            </div>
        </div>
            )
}