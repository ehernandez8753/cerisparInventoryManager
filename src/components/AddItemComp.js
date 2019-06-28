import React, {Component} from "react";

class AddItemComp extends Component{

    constructor(props){

        super(props);
        this.state = {
            currentItemName: "",
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
            currentSku: "",
            currentQuantity: "",
            currentLocation: "",
            currentItemCost: "",
            currentNote: ""
        })
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
                <button className="editAndDeleteButtons" style={{height: "4vh", width: "6vw", fontSize: "1vw"}} onClick={() => {this.props.addItem(this.state.currentItemName, this.state.currentSku, this.state.currentQuantity, this.state.currentLocation, this.state.currentItemCost, this.state.currentNote);
                this.clearAllInputs()}}>Add Item</button>

            </div>

        )
    }
}

export default AddItemComp;