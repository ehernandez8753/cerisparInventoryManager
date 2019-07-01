import React, { Component } from 'react';
import axios from "axios";
import "./reset.css";
import './App.css';
import './LeftContent.css';
import InventoryItem from "./components/InventoryItem";
import AddItemComp from "./components/AddItemComp";
import TableHeaderComp from "./components/TableHeaderComp";

class App extends Component {

  constructor(){
    super();
    this.state = {
      inventoryList: [],
      unSortedInventoryList: []
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.sortQuantityArray = this.sortQuantityArray.bind(this);
    this.sortItemName = this.sortItemName.bind(this);
    this.sortItemCost = this.sortItemCost.bind(this);
    this.sortEditDate = this.sortEditDate.bind(this);
    this.sortSku  = this.sortSku.bind(this);

  }

  componentDidMount(){
    axios.get("/api/cerispar")
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Update: ", error)});
  }

  addItem(itemName, editDate, sku, quantity, location, itemCost, note){
    axios.post("/api/cerispar", {itemName, editDate, sku, quantity, location, itemCost, note})
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Add Item: ", error)});
  }

  editItem(id, itemName, editDate, sku, quantity, location, itemCost, note){
    console.log("Edit item values are ", id, itemName, editDate, sku, quantity, location, itemCost, note)
    axios.put(`/api/cerispar/${id}?itemName=${itemName}&editDate=${editDate}&sku=${sku}&quantity=${quantity}&location=${location}&itemCost=${itemCost}&note=${note}` )
    .then(res => {
      console.log("res data is ", res.data)
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Edit: ", error)});
  }

  deleteItem(id) {
    axios.delete(`/api/cerispar/${id}`)
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Delete: ", error)});
  }


  //------------ COLUMN SORT FUNCTIONS---------------------------------
  sortItemName(sortToUse){
    switch(sortToUse){

      case "highToLow":
        let newArray = this.state.inventoryList;
        newArray.sort((a, b) => {
          if(a.itemName < b.itemName) { return -1; }
          if(a.itemName > b.itemName) { return 1; }
          return 0;
        }).reverse();
        console.log("high to low array is: ", newArray)
        this.setState({inventoryList: newArray});
        break;
      case "lowToHigh":
        let newLowToHighArray = this.state.inventoryList;
        newLowToHighArray.sort((a, b) => {
          if(a.itemName < b.firstname) { return -1; }
          if(a.itemName > b.firstname) { return 1; }
          return 0;
        }).reverse();
        console.log("low to high array is: ", newLowToHighArray)
        this.setState({inventoryList: newLowToHighArray});
        break;
      default:
        console.log("Triggered default state");
        break;
        
    }

  }
  sortQuantityArray(sortToUse){

    switch(sortToUse){

      case "highToLow":
         console.log("Triggered high to low sort");
        let newArray = this.state.inventoryList;
        newArray.sort((a, b) => {return a.quantity - b.quantity}).reverse();
        this.setState({inventoryList: newArray});
        break;
      case "lowToHigh":
        let newLowToHighArray = this.state.inventoryList;
        newLowToHighArray.sort((a, b) => {return a.quantity - b.quantity});
        console.log(newLowToHighArray);
        this.setState({inventoryList: newLowToHighArray});
        break;
      default:
        console.log("Triggered default state");
        break;
    }

  }
  sortItemCost(sortToUse){

    switch(sortToUse){

      case "highToLow":
        let newArray = this.state.inventoryList;
        newArray.sort((a, b) => {return a.itemCost - b.itemCost}).reverse();
        this.setState({inventoryList: newArray});
        break;
      case "lowToHigh":
        let newLowToHighArray = this.state.inventoryList;
        newLowToHighArray.sort((a, b) => {return a.itemCost - b.itemCost});
        this.setState({inventoryList: newLowToHighArray});
        break;
        default:
            console.log("Triggered default state");
            break;
    }

  }
  sortEditDate(sortToUse){

    switch(sortToUse){


      case "highToLow":
        let newArray = this.state.inventoryList;
        newArray.sort((a, b) => {return new Date(a.editDate) - new Date(b.editDate)}).reverse();
        this.setState({inventoryList: newArray});
        break;
      case "lowToHigh":
        let newLowToHighArray = this.state.inventoryList;
        newLowToHighArray.sort((a, b) => {return new Date(a.editDate) - new Date(b.editDate)});
        this.setState({inventoryList: newLowToHighArray});
        break;
        default:
            console.log("Triggered default state");
            break;
        
    }

  }
  sortSku(sortToUse){

    switch(sortToUse){

      case "highToLow":
        let newArray = this.state.inventoryList;
        newArray.sort((a, b) => {return a.sku - b.sku}).reverse();
        this.setState({inventoryList: newArray});
        break;
      case "lowToHigh":
        let newLowToHighArray = this.state.inventoryList;
        newLowToHighArray.sort((a, b) => {return a.sku - b.sku});
        this.setState({inventoryList: newLowToHighArray});
        break;

        default:
            console.log("Triggered default state");   
            break;
    }

  }

  render(){

    return (
      <div className="App">
        <header className="mainHeader">
          <div id="logoBox">Ceris<span style={{color:"#ff5500"}}>Par</span></div>
        </header>
        <section className="contentBody">
          <section className="contentBodyLeft">
            <h2 id="leftTitle" style={{fontWeight: 600}}>Dashboard</h2>
            <h3 id="leftOption">— &nbsp;&nbsp;Inventories</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Orders</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Production</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Receipts</h3>
          </section>
          <section className="contentBodyRight">
            <h1 id="mainPageHeader">Main Inventory #2341-5432 </h1>
            <hr />
            <div className="tableHeaderContainer" > <TableHeaderComp
             sortItemName={this.sortItemName}
             sortQuantityArray={this.sortQuantityArray}
             sortItemCost={this.sortItemCost}
             sortEditDate={this.sortEditDate}
             sortSku={this.sortSku}
             /> </div>
            <div className="contentRightContainer">
              {this.state.inventoryList.map(item => {
                return(
                  <InventoryItem 
                  key={item.id} 
                  item={item}
                  deleteItem={this.deleteItem}
                  editItem={this.editItem}/>
                )
              })}
            </div>

            <div className="addItemContainer"> <AddItemComp addItem={this.addItem}/> </div>
            
          </section>
          
        </section>
        


      </div>
    );

  };

}

export default App;
