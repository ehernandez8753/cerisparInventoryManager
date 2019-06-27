import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import InventoryItem from "./components/InventoryItem";
import AddItemComp from "./components/AddItemComp";

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
    console.log("TRIGGERED EDIT");
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
        <h1>Cerispar Inventory Manager</h1>
        {this.state.inventoryList.map(item => {
          return(
            <InventoryItem 
            key={item.id} 
            item={item}
            deleteItem={this.deleteItem}
            editItem={this.editItem}/>
          )
        })}

        <AddItemComp addItem={this.addItem}/>
      </div>
    );

  };

}

export default App;
