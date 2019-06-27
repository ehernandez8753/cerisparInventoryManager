import React, { Component } from 'react';
import axios from "axios";
import "./reset.css";
import './App.css';
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
  }

  componentDidMount(){
    axios.get("/api/cerispar")
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Update: ", error)});
  }

  addItem(itemName, quantity, itemCost){
    axios.post("/api/cerispar", {itemName, quantity, itemCost})
    .then(res => {
      this.setState({inventoryList: res.data});
    })
    .catch(error => {console.log("Error on Add Item: ", error)});
  }

  editItem(id, itemName, quantity, itemCost){
    axios.put(`/api/cerispar/${id}?itemName=${itemName}&quantity=${quantity}&itemCost=${itemCost}` )
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

  render(){

    return (
      <div className="App">
        <header className="mainHeader">
          <div id="logoBox">Ceris<span style={{color:"lightskyblue"}}>Par</span></div>
        </header>
        <div className="contentBody">
          <div className="contentBodyLeft"></div>
          <div className="contentBodyRight">
            <div className="tableHeaderContainer"> <TableHeaderComp /> </div>

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
