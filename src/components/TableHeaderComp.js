import React, {Component} from "react";
import "../reset.css";
import "./inventoryItem.css";
import '../App.css';

class TableHeaderComp extends Component{

    render(){
        return(
            <div className="contentRow">
                <div className="tableHeaderBox">Item Name</div>
                <div className="tableHeaderBox">Quantity</div>
                <div className="tableHeaderBox">Item Cost</div>
                <div className="tableHeaderBox">Total Cost</div>
            </div>
        )
    }

}

export default TableHeaderComp;