const mongoose = require("mongoose");
const moment = require("moment");

const reqString = {
    type: String,
}

let date = moment().calendar(); 

let entryDate = {type: String, default: date}
let expireDate = {type: Date, default: () => new Date(+new Date() + 21*24*60*60*1000)}
//let age = expireDate - entryDate

const parcelStatus = new mongoose.Schema({
    statusDetail: reqString,
    lastEdit: reqString,
})

const inventorySchema  = new mongoose.Schema({
    trackingNumber: {type: String, unique: true},
    name: reqString,
    contact: reqString,
    address: reqString,
    area: reqString,
    status: parcelStatus,
    product: reqString,
    value: reqString,
    reason: reqString,
    remark: reqString,
    reEntry: reqString,
    attemp: reqString,
    reSchedule: reqString,
    dateEntry: reqString,
    entryDate: entryDate,
    expireDate:expireDate,
    //age: ageing,
})

module.exports = mongoose.model('statusHistory', parcelStatus)
module.exports = mongoose.model('inventories', inventorySchema)


