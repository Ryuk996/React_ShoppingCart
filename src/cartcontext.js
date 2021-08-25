import React, { createContext, useState } from "react"

let Cartcontext= React.createContext();
export default  Cartcontext;
 export const CartProvider=({children}) => {
     const [cartList,setCartlist]=useState([])
    return <Cartcontext.Provider value={{cartList,setCartlist}}>
        {children}
    </Cartcontext.Provider>
        
}