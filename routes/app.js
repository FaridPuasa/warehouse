const express = require('express');
const router = express.Router();
//Models listing
//const inventoryDB = require('../models/zaloraInventory')
const zaloraInventory = require('../models/zaloraInventory');
const pharmacyInventory = require('../models/pharmacyInventory');
const podDB = require('../models/pod');
const content = require('../models/pod');
const dispatchDB = require('../models/dispatch');
const exportDB = require('../models/exportReturn');
const grpMalaysiaDB = require('../models/grpMalaysia');

//middlewares
const { findOne, findOneAndUpdate } = require('../models/zaloraInventory');
const { render } = require('ejs');
const { request } = require('express');

router.get("/", (req,res) => {
    zaloraInventory.find({}, function(err,zaloraInventory){
        res.render('itemList', {
            itemList: zaloraInventory,
            //age: 10-5
        })
        //console.log(10-5)
    })
})

router.get('/itemin', (req,res) => {
    res.render('itemin')
})

router.get('/itemList', (req,res) => {
    zaloraInventory.find({}, function(err,zaloraInventory){
        res.render('itemList', {
            itemList: zaloraInventory
        })
    })
})

router.get('/reentry', (req,res) => {
    res.render('reEntry')
})

router.post('/success', (req,res) =>{
    reEntry(req,res)
})

router.post('/itemin',(req,res) => {
    itemin(req,res)
})

router.post('/success',(req,res) => {
    itemOut(req,res)
})

router.get('/grpmy',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

router.get('/tracking',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

//This is used for return details
function exportReturn(req,res){
    let exports = req.body
    let exportReturn = new exportDB({
        trackingNumber: exports.trackingNumber,
        name: exports.name,
        address: exports.address,
        contact: exports.contact,
    })
    exportReturn.parcelContent.push(item)
    exportReturn.save((err) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.render ('success', {
                head: "Task Assigned",
                message: "Task successfully assigned to <%=  body.assignTo %>.",
            })
        }
    })
}

function grpMalaysia(req,res){
    let grpm = req.body
    let grpmy = new grpMalaysiaDB({
        trackingNumber: grpm.trackingNumber,
        name: grpm.name,
        contact: grpm.contact,
        address: grpm.address,
        weight: grpm.weight,
        dimension: grpm.dimension,
        rates: grpm.rates,
        dateArrivedMy: grpm.dateArrivedMy,
        status: grpm.status, //In Warehouse (Malaysia)
    })
    grpmy.save((err) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.render ('success', {
                head: "Task Assigned",
                message: "Task successfully assigned to <%=  body.assignTo %>.",
            })
        }
    })
}

//Manifest here
function grpManifest(req,res){
    let manifest = req.body
    let grpManifest = new manifestDB({
        manifestRef: manifest.ref,
        manifestBox: manifest.box,
        manifestShipName: manifest.ShipName,
        manifestName: manifest.name,
        manifestDate: manifest.date,
        manifestTotalWeight: manifest.totalWeight, //sumation of weights
        manifestTotalVolume: manifest.totalVolume, //sumation of volumes
        /*
            this script will be executed by JavaScript

            let dimension = document.getElementById(dimension)
            let length = document.getElementById(length)
            let breath = document.getElementById(breath)
            let height = document.getElementById(height)

            let totaldimension = length * breath * height
            let volume = totaldimension / 5000

            dimension.value = volume

            let totalVolume = document.getElementById(...)
            totalVolume.value = sum of volumes....

        */
    })
    grpManifest.content.push(manifestContent)
    grpManifest.save((err) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.render ('success', {
                head: "Task Assigned",
                message: "Task successfully assigned to <%=  body.assignTo %>.",
            })
        }
    })
}

function grpMyTransit(req,res){
    let tracker = req.body.trackingNumber
    findOneAndUpdate({trackingNumber: tracker},{
        dateDepartureMY: req.body.dateDepartureMY,
        status: req.body.status,
    },(err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else res.redirect('reentry')
    })
}

function grpBrunei(req,res){
    let tracker = req.body.trackingNumber// tracking number malaysia
    findOneAndUpdate({trackingNumber: tracker},{
        dateArrivedBN: req.body.dateArrivedBN,
        status: req.body.status, //In Warehouse (Brunei)
    },(err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else res.redirect('reentry')
    })
}

function grpMyOut(req,res){
    let tracker = req.body.trackingNumber
    findOneAndUpdate({trackingNumber: tracker}, {
        dateOut: req.body.dateOut,
        status: req.body.status, //Self Collect or Out Delivery [POD GRP Manual for now]
    },(err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else res.redirect('reentry')
    })
}

//This is used for end of day report
function dispatcherRecord(req,res){
    let dispatch = req.body
    let dispatcher = new dispatchDB({
        ref: dispatch.ref,//Auto generate
        name: dispatch.name,
        carNumber: dispatch.car,
        given: dispatch.parcel, //Total Number of parcel given
        success: dispatch.success, //Total Number of parcel success
        selfCollect: dispatch.selfCollect, //Total Number of parcel changed to selfcollect
        failed: dispatch.failed, //Total Number of parcel failed
        reSchedule: dispatch.reSchedule, //Total Number of parcel re-schedule
        cancel: dispatch.cancel, //Total Number of parcel cancel
        pickup: dispatch.pickup, //Radio yes or no
        pickupVal: dispatch.pickupValue, //Total amount of pickup
        pickupTN: dispatch.pickupTN, //Textarea
        return: dispatch.return, //radio yes or no
        returnVal: dispatch.returnValue, //total number of return parcel
        returnTN: dispatch.returnN, //Textarea
        totalCollected: dispatch.collection, //Amount of cash collected
        dateSubmit: dispatch.dateSubmit,
    })
    dispatcher.save((err) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.render ('success', {
                head: "Task Assigned",
                message: "Task successfully assigned to <%=  body.assignTo %>.",
            })
        }
    })
}



//reEntry parcels
function reEntry(req,res){
    let tracker = req.body.trackingNumber
    console.log(tracker)
    zaloraInventory.findOneAndUpdate({trackingNumber: req.body.trackingNumber}, {
        status: req.body.status,
        reason: req.body.reason,
        remark: req.body.remark,
        reEntry: req.body.reEntry,
        attemp: req.body.attemp,
        reSchedule: req.body.dateSchedule,
    }, (err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else {
            console.log('update success')
            let date = req.body.dateSchedule
            res.render('success',{
                head: "Tracking Number has been updated",
                message: `The tracking number has been reSchedule for delivery on ${date}`
            })
        }
    })
}

//Zalora Starts here
function itemOut(req,res){
    let tracker = req.body.trackingNumber
    zaloraInventory.findOneAndUpdate({trackingNumber:tracker},{
        status: "Out for Delivery",
    })
    //1st bit is used to update the parcel status
    let body = req.body
    let itemOut = new podDB({
        podRef: body.ref, //ref is auto generated by the system. To differentiate the products delivered
        podAssign: body.assignTo,
        podDate: body.dateAssign,
        podTotal: body.value, //Total amount of cash to be collected.
        podTotalParcel: body.parcel, //Total amount of parcel to be delivered.
        podClass: body.type, //Class is to identify who will be delivering. Freelancer or Full Time. 
        podProduct: body.product, //Product is used to identify the delivered product.
        podContent: body.content,
        podArea: body.area,
        podCreate: body.dateCreate,
        podMade: body.madeBy,
    })
    let content = {
        trackingNumber: body.trackingNumber,
        name: body.name,
        contact: body.contact,
        address: body.address,
        product: body.product,
        value: body.value,
    }
    itemOut.podContent.push(content)
    itemOut.save((err) => {
        if (err){
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.render ('success', {
                head: "Task Assigned",
                message: "Task successfully assigned to <%=  body.assignTo %>.",
            })
        }
    })
}

//
function itemin(req,res){
    let status = "IN WAREHOUSE"+"/"+req.body.area+"/"+req.body.dateEntry;
    let inventory = new zaloraInventory({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact: req.body.contact,
       address: req.body.address,
       area: req.body.area,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: status,
       reEntry: "FALSE",
       reason: req.body.reason,
       remark: req.body.reason,
        reEntry: req.body.reEntry,
        attemp: req.body.attemp,
        reSchedule: req.body.reSchedule,
       dateEntry: req.body.dateEntry,
    })
    inventory.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.redirect ('itemin')
        }
    })
}

function selfCollect(req,res){
    let tracker = req.body.trackingNumber
    zaloraInventory.findOneAndUpdate({trackingNumber:tracker},{
        dateCollection: req.body.dateCollection,
        status: "Self Collected",
    }, (err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else res.redirect('selfCollect')
    })
}

//Pharmacy Inventory
function pharmacyItemin(req,res){
    let status = "In Warehouse" + "(Med Room)" + "["+req.body.area+"]";
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       fridge: req.body.fridgeMeds,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: status,
    })
    inventory.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Please check'
                })
            }
        }else {
            res.redirect ('pharmacyIn')
        }
    })
}

function pharmacyOut (req,res){
    let tracker = req.body.trackingNumber
    findOneAndUpdate({trackingNumber:tracker},{
        status: "Out for Delivery",
    })
    let body = req.body
    let pharmacyOut = new pharmacyPodDB ({
        podRef: body.ref, //ref is auto generated by the system. To differentiate the products delivered
        podAssign: body.assignTo,
        podDate: body.dateAssign,
        podTotal: body.value, //Total amount of cash to be collected.
        podTotalParcel: body.parcel, //Total amount of parcel to be delivered.
        podClass: body.type, //Class is to identify who will be delivering. Freelancer or Full Time. 
        podProduct: body.product, //Product is used to identify the delivered product.
        podContent: body.content,
        podArea: body.area,
        podCreate: body.dateCreate,
        podMade: body.madeBy,
    })
    pharmacyOut.pharmacyContent.push(content)
    pharmacyOut.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Please check'
                })
            }
        }else {
            res.redirect ('success')
        }
    })
}



module.exports = router;