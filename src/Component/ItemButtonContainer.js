import React from 'react';
import ItemButton from './ItemButton';
class ItemButtonContainer extends React.Component{
    constructor(){
        super();
        this.state = {stock: []}
    }
    componentWillMount(){
        console.log("Test mount")
        const superagent = require('superagent');
        superagent.post('http://localhost:5000/stock/getCafet').end((error, response)=>{
            console.log(response.body);
            response.body.map((Item)=>{
                console.log(Item);
                return(Item);
            })
            this.setState({stock: response.body});

            
        });
    }
    render(){
        if(this.state){
            return(<div>{this.state.stock.map((Item)=>{
                console.log(Item);
                return(<ItemButton name={Item.name} id={Item.id} price={Item.price}/>);
            })}</div>)
        }else{
            return(<h1>Erreur Impossible de récupérer le stock</h1>)
        }
        
    }
}
export default ItemButtonContainer;