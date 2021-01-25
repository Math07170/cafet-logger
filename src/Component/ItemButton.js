import React, {useContext} from "react";
import SellContext from '../Context/SellContext';

export default function ItemButton(props){
    const contextSell = useContext(SellContext);
    function onClick(){
        contextSell.ItemList.push({
        id:props.id,
        name:props.name,
        price:props.price
    });
    console.log(contextSell.ItemList);
    contextSell.setPrice(contextSell.price + props.price);
}
    return(
        <button onClick={onClick}>{props.name}</button>
    );

}