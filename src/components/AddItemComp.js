import React, {Component} from "react";

class AddItemComp extends Component{

    constructor(props){

        super(props);
        this.state = {
            currentItemName: "",
            currentQuantity: 0,
            currentItemCost: 0
        }
    }

    handleChangeItemName(newName){
        this.setState({currentItemName: newName});
    }
    handleChangeQuantity(newQuantity){
        this.setState({currentQuantity: newQuantity});
    }
    handleChangeItemCost(newItemCost){
        this.setState({currentItemCost: newItemCost});
    }

    render(){

        return(
            <div>
                <input className="addItemInputBox" placeholder="Item Name" onChange={(event) => {this.handleChangeItemName(event.target.value)}}/>
                <input className="addItemInputBox" placeholder="Quantity" onChange={(event) => {this.handleChangeQuantity(event.target.value)}}/>
                <input className="addItemInputBox" placeholder="Item Cost" onChange={(event) => {this.handleChangeItemCost(event.target.value)}}/>
                <button onClick={() => this.props.addItem(this.state.currentItemName, this.state.currentQuantity, this.state.currentItemCost)}>Add Item</button>
            </div>

        )
    }
}

export default AddItemComp;