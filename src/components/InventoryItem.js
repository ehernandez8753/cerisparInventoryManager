import React, {Component} from "react";
import "../reset.css";
import "./inventoryItem.css";
import '../App.css';

class InventoryItem extends Component{

    constructor(props){

        super(props);
        this.state = {
            editing: false,
            itemName: props.item.itemName,
            quantity: props.item.quantity,
            itemCost: props.item.itemCost,
            totalCost: (props.item.quantity * props.item.itemCost).toFixed(2)
        }
        
        this.toggleEditing = this.toggleEditing.bind(this);
        this.calculateTotalCost = this.calculateTotalCost.bind(this);
    }

    toggleEditing(){
        let newEditState = !this.state.editing;
        this.setState({
            editing: newEditState
        })
        if(this.state.editing === true){
            this.calculateTotalCost();
        }
    }
    calculateTotalCost(){
        let newTotalCost = this.state.quantity * this.state.itemCost;
        this.setState({totalCost: newTotalCost});
    }
    handleChangeItemName(newName){
        this.setState({itemName: newName});
    }
    handleChangeQuantity(newQuantity){
        this.setState({quantity: newQuantity});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeItemCost(newItemCost){
        this.setState({itemCost: newItemCost});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }

    render(){
        let {itemName, quantity, itemCost, totalCost} = this.state;

        return(
            <div className="itemContainer">
                <div className={this.state.editing === true ? ("hidden") : "contentRow"}>
                    <div className="smallContextBox"><span style={{fontWeight: 900}}>{itemName}</span></div> 
                    <div className="smallContextBox">{quantity}</div> 
                    <div className="smallContextBox">{`$${itemCost}`}</div> 
                    <div className="smallContextBox">{`$${totalCost}`}</div> 
                </div>
                <div className={this.state.editing === false ? ("hidden") : "contentRow"}>
                    <input className="addItemInputBox" placeholder="Item Name" value={this.state.itemName} onChange={(event) => {this.handleChangeItemName(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Quantity"  value={this.state.quantity} onChange={(event) => {this.handleChangeQuantity(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Item Cost" value={this.state.itemCost} onChange={(event) => {this.handleChangeItemCost(event.target.value)}}/>
                </div>
                <button className="editAndDeleteButtons" onClick={
                    this.state.editing === false ? 
                    (() => this.toggleEditing()) : 
                    () => {
                        this.props.editItem(this.props.item.id, this.state.itemName, this.state.quantity, this.state.itemCost)
                        this.toggleEditing()
                        }}>{this.state.editing === true ? "Confirm Edit" : "Edit Item"}</button>
                <button className="editAndDeleteButtons" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete Item</button>

            </div>

        )
    }
}

export default InventoryItem;