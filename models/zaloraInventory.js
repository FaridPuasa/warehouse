const mongoose = require("mongoose");

const reqString = {
    type: String,
}

let entryDate = {type: Date, default: Date.now}
let expireDate = {type: Date, default: () => new Date(+new Date() + 21*24*60*60*1000)}
//let age = expireDate - entryDate

const statusList = new mongoose.Schema({
    statusDetail: reqString,
    date: {type: Date, deafault: Date.now()}
})

const inventorySchema  = new mongoose.Schema({
    trackingNumber: {type: String, unique: true},
    name: reqString,
    contact: reqString,
    address: reqString,
    area: reqString,
    status: statusList,
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

module.exports = mongoose.model('statusHistory', statusList)
module.exports = mongoose.model('inventories', inventorySchema)


