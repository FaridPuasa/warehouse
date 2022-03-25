const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const inventorySchema  = new mongoose.Schema({
    trackingNumber: {type: String, unique: true},
    fridge: reqString,
    name: reqString,
    contact1: reqString,
    address: reqString,
    area: reqString,
    status: reqString,
    product: reqString,
    value: reqString,
    dateEntry: reqString,
    entryDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('pharmacyInventories', inventorySchema)


