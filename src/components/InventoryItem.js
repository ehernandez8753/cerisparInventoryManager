import React, {Component} from "react";
import "./inventoryItem.css";

class InventoryItem extends Component{

    constructor(props){

        super(props);
        this.state = {
            editing: false,
            itemName: props.item.itemName,
            quantity: props.item.quantity,
            itemCost: props.item.itemCost,
        }

        this.toggleEditing = this.toggleEditing.bind(this);
    }

    toggleEditing(){
        let newEditState = !this.state.editing;
        this.setState({
            editing: newEditState
            
        })
    }
    handleChangeItemName(newName){
        this.setState({itemName: newName});
    }
    handleChangeQuantity(newQuantity){
        this.setState({quantity: newQuantity});
    }
    handleChangeItemCost(newItemCost){
        this.setState({itemCost: newItemCost});
    }

    render(){
        let {itemName, quantity, itemCost} = this.state;

        return(
            <div>
                <h2 className={this.state.editing === true ? ("hidden") : ""}> {`${itemName}   Quantity: ${quantity}   Item Cost: ${itemCost}`}</h2>
                <div className={this.state.editing === false ? ("hidden") : ""}>
                    <input placeholder="Item Name" value={this.state.itemName} onChange={(event) => {this.handleChangeItemName(event.target.value)}}/>
                    <input placeholder="Quantity"  value={this.state.quantity} onChange={(event) => {this.handleChangeQuantity(event.target.value)}}/>
                    <input placeholder="Item Cost" value={this.state.itemCost} onChange={(event) => {this.handleChangeItemCost(event.target.value)}}/>
                </div>
                <button onClick={
                    this.state.editing === false ? 
                    (() => this.toggleEditing()) : 
                    () => {
                        this.props.editItem(this.props.item.id, this.state.itemName, this.state.quantity, this.state.itemCost)
                        this.toggleEditing()
                        }}>{this.state.editing === true ? "Confirm Edit" : "Edit Item"}</button>
                <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete Item</button>

            </div>

        )
    }
}

export default InventoryItem;