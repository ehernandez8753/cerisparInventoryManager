import React, {Component} from "react";
import "../reset.css";
import "./inventoryItem.css";
import '../App.css';

class TableHeaderComp extends Component{
    constructor(props){
        super(props);

        this.state = {
            itemNameSortState: "lowToHigh",
            quantitySortState: "lowToHigh",
            itemCostSortState: "lowToHigh",
            editDateSortState: "lowToHigh",
            skuSortState: "lowToHigh",
        }

        this.SortController = this.SortController.bind(this);
    }

    SortController(targetSortItem){
        switch(targetSortItem){
            case "itemName":
                if(this.state.itemNameSortState === "lowToHigh"){
                    this.setState({itemNameSortState: "highToLow"});
                    this.props.sortItemName(this.state.itemNameSortState);
                }else if(this.state.itemNameSortState === "highToLow"){
                    this.setState({itemNameSortState: "lowToHigh"});
                    this.props.sortItemName(this.state.itemNameSortState);
                }
                break;

            case "quantity":
                if(this.state.quantitySortState === "lowToHigh"){
                    this.setState({quantitySortState: "highToLow"});
                    this.props.sortQuantityArray(this.state.quantitySortState);
                }else if(this.state.quantitySortState === "highToLow"){
                    this.setState({quantitySortState: "lowToHigh"});
                    this.props.sortQuantityArray(this.state.quantitySortState);
                }
                break;

            case "itemCost":
                if(this.state.itemCostSortState === "lowToHigh"){
                    this.setState({itemCostSortState: "highToLow"});
                    this.props.sortItemCost(this.state.itemCostSortState);
                }else if(this.state.itemCostSortState === "highToLow"){
                    this.setState({itemCostSortState: "lowToHigh"});
                    this.props.sortItemCost(this.state.itemCostSortState);
                }
                break;

            case "editDate":
                if(this.state.editDateSortState === "lowToHigh"){
                    this.setState({editDateSortState: "highToLow"});
                    this.props.sortEditDate(this.state.editDateSortState);
                }else if(this.state.editDateSortState === "highToLow"){
                    this.setState({editDateSortState: "lowToHigh"});
                    this.props.sortEditDate(this.state.editDateSortState);
                }
                break;

            case "sku":
                if(this.state.skuSortState === "lowToHigh"){
                    this.setState({skuSortState: "highToLow"});
                    this.props.sortSku(this.state.skuSortState);
                }else if(this.state.skuSortState === "highToLow"){
                    this.setState({skuSortState: "lowToHigh"});
                    this.props.sortSku(this.state.skuSortState);
                }
                break;

            default:
                console.log("Sort function triggered default case");
        }
    }

    render(){
        return(
            <div className="contentRow">
                <div onClick={() => this.SortController("itemName")} className="tableHeaderBox" style={{width: "10vw"}}>Item Name</div>
                <div onClick={() => this.SortController("editDate")} className="tableHeaderBox">Edit Date</div>
                <div onClick={() => this.SortController("sku")} className="tableHeaderBox">SKU</div>
                <div onClick={() => this.SortController("quantity")} className="tableHeaderBox">Quantity</div>
                <div className="tableHeaderBox">Location</div>
                <div onClick={() => this.SortController("itemCost")} className="tableHeaderBox">Item Cost</div>
                <div className="tableHeaderBox" style={{width: "8vw"}}>Total Cost</div>
                <div className="tableHeaderBox" style={{width: "14vw"}}>Notes</div>
            </div>
        )
    }

}

export default TableHeaderComp;