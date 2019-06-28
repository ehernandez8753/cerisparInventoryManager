import React, {Component} from "react";
import "../reset.css";
import "./inventoryItem.css";
import '../App.css';

class TableHeaderComp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="contentRow">
                <div className="tableHeaderBox" style={{width: "10vw"}}>Item Name</div>
                <div className="tableHeaderBox">SKU</div>
                <div onClick={() => {this.props.sortArray()}} className="tableHeaderBox">Quantity</div>
                <div className="tableHeaderBox">Location</div>
                <div className="tableHeaderBox">Item Cost</div>
                <div className="tableHeaderBox">Total Cost</div>
                <div className="tableHeaderBox" style={{width: "14vw"}}>Notes</div>
            </div>
        )
    }

}

export default TableHeaderComp;