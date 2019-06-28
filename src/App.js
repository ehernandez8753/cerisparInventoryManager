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
      inventoryList: []
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.sortArray = this.sortArray.bind(this);
  }

  componentDidMount(){
    axios.get("/api/cerispar")
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Update: ", error)});
  }

  addItem(itemName, sku, quantity, location, itemCost, note){
    axios.post("/api/cerispar", {itemName, sku, quantity, location, itemCost, note})
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Add Item: ", error)});
  }

  editItem(id, itemName, sku, quantity, location, itemCost, note){
    console.log("Edit item values are ", id, itemName, sku, quantity, location, itemCost, note)
    axios.put(`/api/cerispar/${id}?itemName=${itemName}&sku=${sku}&quantity=${quantity}&location=${location}&itemCost=${itemCost}&note=${note}` )
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

  sortArray(){
    let newArray = this.state.inventoryList;
    console.log(newArray);
    newArray.sort((a, b) => {return a.quantity - b.quantity}).reverse();
    console.log("Ran sort array, new array is ", newArray);
    this.setState({inventoryList: newArray});
  }

  render(){

    return (
      <div className="App">
        <header className="mainHeader">
          <div id="logoBox">Ceris<span style={{color:"#ff5500"}}>Par</span></div>
        </header>
        <div className="contentBody">
          <div className="contentBodyLeft">
            <h2 id="leftTitle">— Dashboard</h2>
            <h3 id="leftOption">— &nbsp;&nbsp;Inventories</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Orders</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Production</h3>
            <h3 id="leftOption">— &nbsp;&nbsp;Receipts</h3>
          </div>
          <div className="contentBodyRight">
            <h1 id="mainPageHeader">Main Inventory # 2341 - 5432 </h1>
            <hr />
            <div className="tableHeaderContainer" > <TableHeaderComp sortArray={this.sortArray}/> </div>

            {this.state.inventoryList.map(item => {
              return(
                <InventoryItem 
                key={item.id} 
                item={item}
                deleteItem={this.deleteItem}
                editItem={this.editItem}/>
              )
            })}
            <div className="addItemContainer"> <AddItemComp addItem={this.addItem}/> </div>
            
          </div>
          
        </div>
        


      </div>
    );

  };

}

export default App;
