const inventoryItems = [];
let id = 0;

module.exports = {
    getAllItems: (req, res) => {
        res.status(200).send(inventoryItems);
    },

    addNewItem: (req, res) => {
        let { itemName, quantity, itemCost } = req.body;
        let newItem = {id, itemName, quantity, itemCost};
        id++;
        inventoryItems.push(newItem);
        res.status(200).send(inventoryItems);
    },

    editItem: (req, res) => {
        let { id } = req.params;
        let { itemName, quantity, itemCost } = req.query;
        let index = inventoryItems.findIndex(item => item.id === +id);
        console.log(inventoryItems[index].itemName)
        itemName ? inventoryItems[index].itemName = itemName : null;
        quantity ? inventoryItems[index].quantity = +quantity : null;
        itemCost ? inventoryItems[index].itemCost = +itemCost : null;
        res.status(200).send(inventoryItems);
    },

    deleteItem: (req, res) => {
        let {id } = req.params;
        let index = inventoryItems.findIndex(item => item.id === +id);
        index !== -1 && inventoryItems.splice(index, 1); //!== makes sure that the index exists
        res.status(200).send(inventoryItems);
    }
}