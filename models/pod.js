const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true,
}

const content = new mongoose.Schema({
    trackingNumber: reqString,
    name: reqString,
    contact: reqString,
    address: reqString,
    product: reqString,
    value: reqString,
})

const podSchema  = new mongoose.Schema({
    podRef: {type: String, unique: true},
    podArea: reqString,
    podDate: reqString,
    podTotal: reqString, //Total amount of cash to be collected.
    podTotalParcel: reqString, //Total amount of parcel to be delivered.
    podClass:reqString, //Class is to identify who will be delivering. Freelancer or Full Time. 
    podProduct: reqString, //Product is used to identify the delivered product.
    podContent: reqString,
    podCreate: reqString,
    podMade: reqString,
    podContent: [{content}],
})

module.exports = mongoose.model('contents', content)
module.exports = mongoose.model('pods', podSchema)