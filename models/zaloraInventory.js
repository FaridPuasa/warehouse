const mongoose = require("mongoose");
const moment = require("moment");

const reqString = {
    type: String,
}

let date = moment().format();
let later = moment(date).add(21,'d')

let entryDate = {type: Date, default: date}
let expireDate = {type: Date, default: later}
//let collectionDate = {type: Date, default: date}
//let age = expireDate - entryDate

const inventorySchema  = new mongoose.Schema({
    trackingNumber: {type: String, unique: true},
    parcelNumber: reqString,
    name: reqString,
    contact: reqString,
    address: reqString,
    area: reqString,
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
    status: reqString,
    history: [{statusDetail: reqString}],
    //age: ageing,
})

module.exports = mongoose.model('inventories', inventorySchema)


