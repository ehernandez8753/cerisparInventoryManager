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
            editDate: props.item.editDate,
            sku: props.item.sku,
            quantity: props.item.quantity,
            location: props.item.location,
            itemCost: props.item.itemCost,
            note: props.item.note,
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
        }else{
            this.calculateTotalCost();
        }
    }
    calculateTotalCost(){
        let newTotalCost = ((this.state.quantity * this.state.itemCost).toFixed(2));
        //newTotalCost;
        this.setState({totalCost: newTotalCost});
    }
    handleChangeItemName(newName){
        this.setState({itemName: newName});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeEditDate(newEditDate){
        this.setState({editDate: newEditDate});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeSku(newSku){
        this.setState({sku: newSku});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeQuantity(newQuantity){
        this.setState({quantity: newQuantity});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeLocation(newLocation){
        this.setState({location: newLocation});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeItemCost(newItemCost){
        this.setState({itemCost: newItemCost});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }
    handleChangeNote(newNote){
        this.setState({note: newNote});
        let newTotalCost = (this.state.quantity * this.state.itemCost).toFixed(2);
        this.setState({totalCost: newTotalCost});
    }

    render(){
        let {itemName, editDate, sku, quantity, location, itemCost, totalCost, note} = this.state;

        return(
            <div className="itemContainer">
                <div className={this.state.editing === true ? ("hidden") : "contentRow"}>
                    <div className="smallContextBox" style={{width: "10.2vw"}}><span style={{fontWeight: 900}} >{itemName}</span></div> 
                    <div className="smallContextBox" >{editDate}</div>
                    <div className="smallContextBox">{sku}</div> 
                    <div className="smallContextBox">{`${quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div> 
                    <div className="smallContextBox">{location}</div> 
                    <div className="smallContextBox">{`$${itemCost}`}</div> 
                    <div className="smallContextBox" style={{width: "8vw"}}>{`$${totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div> 
                    <div className="smallContextBox" style={{width: "14vw"}}>{note}</div> 
                </div>
                <div className={this.state.editing === false ? ("hidden") : "contentRow"}>
                    <input className="addItemInputBox" placeholder="Item Name" style={{width: "10vw"}} value={this.state.itemName} onChange={(event) => {this.handleChangeItemName(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Edit Date" value={this.state.editDate} onChange={(event) => {this.handleChangeEditDate(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="SKU" value={this.state.sku} onChange={(event) => {this.handleChangeSku(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Quantity"  value={this.state.quantity} onChange={(event) => {this.handleChangeQuantity(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Location"  value={this.state.location} onChange={(event) => {this.handleChangeLocation(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Item Cost" value={this.state.itemCost} onChange={(event) => {this.handleChangeItemCost(event.target.value)}}/>
                    <input className="addItemInputBox" placeholder="Notes" style={{width: "14vw"}} value={this.state.note} onChange={(event) => {this.handleChangeNote(event.target.value)}}/>
                </div>
                <button className="editAndDeleteButtons" onClick={
                    this.state.editing === false ? 
                    (() => this.toggleEditing()) : 
                    () => {
                        this.props.editItem(this.props.item.id, this.state.itemName, this.state.editDate, this.state.sku, this.state.quantity, this.state.location, this.state.itemCost, this.state.note)
                        this.toggleEditing()
                        }}>{this.state.editing === true ? "Confirm" : "Edit"}</button>
                <button className="editAndDeleteButtons" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete</button>

            </div>

        )
    }
}

export default InventoryItem;