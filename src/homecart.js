import React, { useContext } from "react";
import Cartcontext from "./cartcontext";

export default function Homecart({data,handleRemoveitem}){
    return(
        <div className="homeCart">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{data.productName}</div>
            {data.quantity}
          </div>
          <span>{data.price*data.quantity}</span>
          <span style={{cursor:'pointer'}} class="badge bg-primary rounded-pill" onClick={ ()=> handleRemoveitem(data.id)}>X</span>
        </li>
        </div>
    )
}