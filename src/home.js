import React from "react"
import Card from "./card";
import Cart from "./cart";
import Homecart from "./homecart";
import  { useState, useContext } from "react";
import Cartcontext from "./cartcontext";

export default function Home(){
    const{cartList,setCartlist}=useContext(Cartcontext)
    const [product,setProduct] = useState([
        {
          id : 1,
          productName : "Apple",
          productImage : "https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg",
          price : 150,
          quantity:0
        },
        {
          id : 2,
          productName : "Orange",
          productImage : "https://i.pinimg.com/originals/50/91/3e/50913eeb04768a5b1fa9985c16704d96.jpg",
          price : 250,
          quantity:0
        },
        {
          id : 3,
          productName : "Jamun",
          productImage : "https://5.imimg.com/data5/OX/UL/MY-8583111/jamun-fruit-500x500.jpg",
          price : 50,
          quantity:0
        },
        {
          id : 4,
          productName : "Guava",
          productImage : "https://cdn2.stylecraze.com/wp-content/uploads/2013/03/11-Important-Benefits-Of-Guava-Fruit-Guava-Nutrition-Facts.jpg",
          price : 100,
          quantity:0
        },
        {
            id : 5,
            productName : "WaterMelon",
            productImage : "https://5.imimg.com/data5/BM/MR/MY-41533060/watermelon-fruit-500x500.jpg",
            price : 200,
            quantity:0
        },
        {
            id : 6,
            productName : "Banana",
            productImage : "https://5.imimg.com/data5/VY/QT/MY-51857835/banana-fruit-500x500.jpg",
            price : 50,
            quantity:0
        },
        {
          id : 7,
          productName : "Strawberry",
          productImage : "https://5.imimg.com/data5/CK/LM/MY-46960546/fresh-red-strawberry-500x500.jpg",
          price : 500,
          quantity:0
        },
        {
        id : 8,
        productName : "CustardApple",
        productImage : "https://m.media-amazon.com/images/I/51K3LEEVxIL._SX466_.jpg",
        price : 180,
        quantity:0
      }, 
      {
        id : 9,
        productName : "Pineapple",
        productImage : "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
        price : 120,
        quantity:0
      },  
      {
      id : 10,
      productName : "Amlaa",
      productImage : "https://5.imimg.com/data5/RI/RS/MY-14521890/fresh-amla-500x500.jpg",
      price : 20,
      quantity:0
    },
      ])
      let addToCart = (id) => {
        let products = product.find(obj => obj.id==id);
        setCartlist([...cartList,products]);
  
      }
      
      let removeItem = (id) => {
        let result = window.confirm("Are you sure you want to remove item?");
        if(result){
          let cartIndex = cartList.findIndex(obj => obj.id==id);
          cartList.splice(cartIndex,1);
          setCartlist([...cartList]);
        }
  
      }
  
      const [count,setCount] = useState(0)
      let increase = (id) =>{
        let countsIndex = product.findIndex(obj => obj.id == id);
        product[countsIndex].quantity++;
        setCount([...product])    
      }
      
      let decrease = (id) =>{
          let countsIndex = product.findIndex(obj => obj.id == id);
          product[countsIndex].quantity--;
          setCount([...product])
          if(product[countsIndex].quantity<=0){
            alert("0 items present")
            let cartIndex = cartList.findIndex(obj => obj.id==id);
            cartList.splice(cartIndex,1);
            setCartlist([...cartList]);
            
          }
          
      }
    return(
        <div>
             <>
      <div className="container " style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                product.map((data) => {
                  return <Card product={data} handleCart={addToCart} handleIncrease={increase} handleDecrease={decrease}  ></Card>
                })
              }
            </div>
          </div>
          <div className="col-lg-4">
            <ol class="list-group list-group-numbered">
              {
                cartList.length === 0 ? <h3>'No items in cart'</h3> : ''
              }
              {
                cartList.map((items) => {
                  return <Homecart data={items} handleRemoveitem={removeItem}  ></Homecart>
                })
              }
              {cartList.length === 0 ? <h2>cart is empty</h2> : <div className="tot">Total- Rs-${cartList.map((e) => e.quantity * e.price).reduce((a, b) => a + b)} </div>}
            </ol>
          </div>
        </div>
      </div>
    </>
        </div>
    )
}