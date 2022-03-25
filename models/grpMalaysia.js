const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const grpMYSchema  = new mongoose.Schema({
   trackingNumber: {type: String, required: true, unique: true},
   name: reqString,
   contact: reqString,
   address: reqString,
   commodities: reqString,
   currency: reqString,
   value: reqString,
   weight: reqString,
   dimension: reqString,
   rates: reqString,
   status: reqString,
   dateArrivedMy: reqString,
   dateArrivedBN: reqString,
   dateDepartureMY: reqString,
   dateOut: reqString,
})

module.exports = mongoose.model('grpMYs', grpMYSchema)

/*
This is used to for go rush plus inventory. Especially from malaysia.
*/