const req = require("express/lib/request");
const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const dispatchSchema  = new mongoose.Schema({
    ref: reqString,//Auto generate
    name: reqString,
    carNumber: reqString,
    given: reqString, //Total Number of parcel given
    success: reqString, //Total Number of parcel success
    failed: reqString, //Total Number of parcel failed
    reSchedule: reqString, //Total Number of parcel re-schedule
    cancel: reqString, //Total Number of parcel cancel
    pickup: reqString, //Radio yes or no
    pickupVal: reqString, //Total amount of pickup
    pickupTN: reqString, //Textarea
    return: reqString, //radio yes or no
    returnVal: reqString, //total number of return parcel
    returnTN: reqString, //Textarea
    totalCollected: reqString, //Amount of cash collected
    dateSubmit: reqString,
})

module.exports = mongoose.model('dispatchs', dispatchSchema)