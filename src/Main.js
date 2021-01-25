import React, {useContext, useEffect, useState } from 'react';
import UserContext from './Context/UserContext';
import SellContext from './Context/SellContext';
import NetworkContext from './Context/NetworkContext';
import ItemButtonContainer from './Component/ItemButtonContainer';
import FooterBar from './Component/FooterBar';

function Main(){
    const [Items, SetItems] = useState([]);
    const [Price, setPrice] = useState(0);
    const [cash, setCash] = useState(0);

    const NetworkContextVar = useContext(NetworkContext);
    const socket = NetworkContextVar.socketIOClient;
    useEffect(() => {
        socket.on("Cash", data => {
            setCash(data);
        });
    });
    function ValidateSell(){
        socket.emit('sell', Items);
    }
    const contextUser = useContext(UserContext);
    const ContextValue = {
        ItemList: Items,
        setItemList: SetItems,
        price: Price,
        setPrice: setPrice
    }
    console.log("Main Rerender");
    return(
        <SellContext.Provider value={ContextValue}>
            <div className="content">
                <h1>{contextUser.prenom} test : {cash}</h1>
                    <ItemButtonContainer></ItemButtonContainer>
                <button onClick={ValidateSell}>Sell</button>
            </div>
            
            <FooterBar />
            
        </SellContext.Provider>
    );
}
export default Main;
