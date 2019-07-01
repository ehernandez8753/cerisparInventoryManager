import React, {Component} from "react";

class AddItemComp extends Component{

    constructor(props){

        super(props);
        this.state = {
            currentItemName: "",
            currentEditDate: "",
            currentSku: "",
            currentQuantity: "",
            currentLocation: "",
            currentItemCost: "",
            currentNote: ""
        }

        this.clearAllInputs = this.clearAllInputs.bind(this);
    }

    handleChangeItemName(newName){
        this.setState({currentItemName: newName});
    }
    handleChangeEditDate(newEditDate){
        this.setState({currentEditDate: newEditDate});
    }
    handleChangeSku(newSku){
        this.setState({currentSku: newSku});
    }
    handleChangeQuantity(newQuantity){
        this.setState({currentQuantity: newQuantity});
    }
    handleChangeLocation(newLocation){
        this.setState({currentLocation: newLocation});
    }
    handleChangeItemCost(newItemCost){
        this.setState({currentItemCost: newItemCost});
    }
    handleChangeNote(newNote){
        this.setState({currentNote: newNote});
    }
    clearAllInputs(){
        this.setState({
            currentItemName: "",
            currentEditDate: "",
            currentSku: "",
            currentQuantity: "",
            currentLocation: "",
            currentItemCost: "",
            currentNote: ""
        })
    }
    generateRandomItem(){
        let itemNames = ["Shoes", "Shirts", "Hats", "Bells", "Phones", "Toasters", "Pants", "Blankets"];
        let letters = ["A", "B", "C", "D", "E"];
        let notes = ["Delivered by Juan", "Missing 3 units", "", "New Shipment", "Broken Palette", "", ""];

        this.setState({
            currentItemName: itemNames[Math.floor(Math.random() * itemNames.length)],
            currentEditDate: "",
            currentSku: `${(Math.random() * 1000).toFixed(0)}-${(Math.random() * 1000).toFixed(0)}`,
            currentQuantity: (Math.random() * 100).toFixed(0),
            currentLocation: `${letters[Math.floor(Math.random() * letters.length)]}${(Math.random()*100).toFixed(0)}`,
            currentItemCost: `${(Math.random() * 100).toFixed(2)}`,
            currentNote: notes[Math.floor(Math.random() * notes.length)]
        })
    }
    grabCurrentDate(){
       let currentDate = new Date();
       let day = String(currentDate.getDate()).padStart(2,"0");
       let month = String(currentDate.getMonth() + 1).padStart(2,"0");
       let year = String(currentDate.getFullYear());
       currentDate = month + "/" + day + "/" + year;
       return currentDate;
    }

    render(){
        return(
            <div className="addItemRow">
                <input style={{width: "10vw"}} className="addItemInputBox" value={this.state.currentItemName} placeholder="Item Name" onChange={(event) => {this.handleChangeItemName(event.target.value)}}/>
                
                <input className="addItemInputBox" value={this.state.currentSku} placeholder="Sku" onChange={(event) => {this.handleChangeSku(event.target.value)}}/>
                <input type="number" className="addItemInputBox" value={this.state.currentQuantity} placeholder="Quantity" onChange={(event) => {this.handleChangeQuantity(event.target.value)}}/>
                <input className="addItemInputBox" value={this.state.currentLocation} placeholder="Location" onChange={(event) => {this.handleChangeLocation(event.target.value)}}/>
                <input type="number" className="addItemInputBox" value={this.state.currentItemCost} placeholder="Item Cost" onChange={(event) => {this.handleChangeItemCost(event.target.value)}}/>
                <input style={{width: "14vw"}} className="addItemInputBox" value={this.state.currentNote} placeholder="Notes" onChange={(event) => {this.handleChangeNote(event.target.value)}}/>
                <button className="editAndDeleteButtons" style={{height: "4vh", width: "6vw", fontSize: "1vw"}} onClick={() => {this.props.addItem(this.state.currentItemName, this.grabCurrentDate(), this.state.currentSku, this.state.currentQuantity, this.state.currentLocation, this.state.currentItemCost, this.state.currentNote);
                this.clearAllInputs()}}>Add Item</button>
                <button className="editAndDeleteButtons" style={{fontSize: ".8vw"}} onClick={() => {this.generateRandomItem()}}>Random Item</button>
            </div>

        )
    }
}

export default AddItemComp;