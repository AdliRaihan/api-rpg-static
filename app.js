const express = require('express')
const app = express()
// Controller
const upgradeAPI = require('./controller/upgrade')
const itemsAPI = require('./controller/items')
const _404 = require('./controller/404')
// define the home page route
// this page route is for v1/items
// this is the routing where you can get all the items 
// if you think u need specific item then u can use filters
app.all('/v1/items', (req, res) => {
    _ = new itemsAPI(req, res)
})
// this is page route for upgrading the item
// on this page u have to give 2 parameters
// 1. id item and 2. current upgraded number
// if succeed then u will get the upgraded item
app.all('/v1/items/upgrade', (req, res) => {
    _ = new upgradeAPI(req, res)  
})
// most likely people will get un pathed route
// which is ....:8080/ without any endpoint
// then if we didnt have any endpoint then we will show 404 page
app.all('*', (req, res) => {
    _ = new _404(req, res)
})
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});