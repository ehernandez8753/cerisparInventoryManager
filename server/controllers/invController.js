const inventoryItems = [];
let id = 0;

module.exports = {
    getAllItems: (req, res) => {
        res.status(200).send(inventoryItems);
    },

    addNewItem: (req, res) => {
        let { itemName, sku, quantity, location, itemCost, note } = req.body;
        let newItem = {id, itemName, sku, quantity, location, itemCost, note};
        id++;
        inventoryItems.push(newItem);
        res.status(200).send(inventoryItems);
    },

    editItem: (req, res) => {
        let { id } = req.params;
        let { itemName, sku, quantity, location, itemCost, note } = req.query;
        let index = inventoryItems.findIndex(item => item.id === +id);
        console.log(inventoryItems[index].itemName)
        itemName ? inventoryItems[index].itemName = itemName : null;
        sku ? inventoryItems[index].sku = sku : null;
        quantity ? inventoryItems[index].quantity = +quantity : null;
        location ? inventoryItems[index].location = location : null;
        itemCost ? inventoryItems[index].itemCost = +itemCost : null;
        note ? inventoryItems[index].note = note : null;
        res.status(200).send(inventoryItems);
    },


    deleteItem: (req, res) => {
        let {id } = req.params;
        let index = inventoryItems.findIndex(item => item.id === +id);
        index !== -1 && inventoryItems.splice(index, 1); //!== makes sure that the index exists
        res.status(200).send(inventoryItems);
    }
}