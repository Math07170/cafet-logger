import React from "react";

export default React.createContext({
    ItemList : [{
        id:"",
        name:"",
        price:0
    }],
    setItemList: (ItemList) =>{},
    price: 0,
    setPrice: (Price) => {}
});