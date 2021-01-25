import React, {useContext} from 'react';
import SellContext from '../Context/SellContext';
import '../CSS/Footer.css';

function FooterBar(){
    console.log("Test");
    const context = useContext(SellContext);
    var totalPrice = 0;
    return(
        <footer className="footer">
            <div className="sumary-bar">
                <ul className="List">
                    {context.ItemList.length}
                    {context.ItemList.map((Item) => {
                        totalPrice = totalPrice+Item.price;
                        return(<li>{Item.name}</li>)
                        })}
                </ul>
            </div>
            <label>Prix : {context.price}€</label>
            <button>Valider</button>
        </footer>
    );
}
export default FooterBar;