const express = require('express')
const app = express()
// Controller
const upgradeAPI = require('./controller/upgrade')
const itemsAPI = require('./controller/items')
// define the home page route
app.all('/v1/items', (req, res) => {
    _ = new itemsAPI(req, res)
})
app.all('/v1/items/upgrade', (req, res) => {
    _ = new upgradeAPI(req, res)  
})
app.listen(3000)