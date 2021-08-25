import React, { useContext } from "react";
import Cartcontext from "./cartcontext";
import Home from "./home";

export default function Cart() {
  const { cartList, setCartlist } = useContext(Cartcontext)
  let removeItem = (id) => {
    let result = window.confirm("Are you sure you want to remove item?");
    if (result) {
      let cartIndex = cartList.findIndex(obj => obj.id == id);
      cartList.splice(cartIndex, 1);
      setCartlist([...cartList]);
    }
  }
  return (
    <div className="container " style={{ marginTop: "80px" }}>

      <div className="col-lg-4">
        <ol class="list-group list-group-numbered">
          {
        cartList.length === 0 ? <h3>'No items in cart'</h3> : ''
          }

          {
            cartList.map((items) => {
              return ( <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{items.productName}</div>
                  {items.quantity}
                </div>
                <span>{items.price * items.quantity}</span>
                <span style={{ cursor: 'pointer' }} class="badge bg-primary rounded-pill" onClick={() => removeItem(items.id)}>X</span>

              </li>
              
              )
            })
          }
        </ol>
      </div>
      <div className="cartinfo">
      {cartList.length === 0 ? <h2>cart is empty</h2> : <h2>Total- Rs-${cartList.map((e) => e.quantity * e.price).reduce((a, b) => a + b)} </h2>}
      </div>
    </div>

  );
}

