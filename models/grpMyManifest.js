const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const manifestContent = new mongoose.Schema({
    trackingNumber: reqString,
    name: reqString,
    contact: reqString,
    address: reqString,
    product: reqString,
    value: reqString,
    fridge: reqString,
})

const manifestSchema  = new mongoose.Schema({
    manifestRef: {type: String, required: true, unique: true},
    manifestBox: reqString,
    manifestShipName: reqString,
    manifestName: reqString,
    manifestDate: reqString,
    manifestTotalWeight: reqString, //sumation of weights
    manifestTotalVolume: reqString, //sumation of volumes
    manifestContent: [{manifestContent}],
})

module.exports = mongoose.model('manifests', manifestSchema)