const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const item = new mongoose.Schema({
    uid: reqString
})

const exportsSchema  = new mongoose.Schema({
    trackingNumber: reqString,
    newTrackingNumber: reqString,
    name: reqString,
    address: reqString,
    contact: reqString,
})

module.exports = mongoose.model('exportss', exportsSchema)