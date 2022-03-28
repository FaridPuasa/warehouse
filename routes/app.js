const express = require('express');
const router = express.Router();
//Models listing
//const statusDB = require('../models/zaloraInventory')
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


/*************************** ZALORA *********************************/
/*
Add on:
1. add incremental on parcel numbers + based on area
2. recheck on zalora pod
3. add status array to required functions
4. ageing need to be check
5. export function need testing
6. create simple reports (end of day report)
7. filter / search function
*/

//use to get all zalora inventory list
router.get('/itemList', (req,res) => {
    zaloraInventory.find({}, function(err,zaloraInventory){
        res.render('itemList', {
            itemList: zaloraInventory
        })
    })
})

//Zalora In
router.get('/itemin', (req,res) => {
    res.render('itemin')
})

router.post('/itemin',(req,res) => {
    itemin(req,res)
})

//Zalora Out
router.get('/itemout',(req,res) => {
    res.render('itemout')
})

router.post('/success',(req,res) => {
    itemOut(req,res)
})

//Zalora Re-Entry
router.get('/reentry', (req,res) => {
    res.render('reEntry')
})

router.post('/success', (req,res) =>{
    reEntry(req,res)
})

//Zalora Dispatcher Report
router.get('/dispatch',(req,res) => {
    res.render('dispatch')
})

router.post('/success', (req,res) => {
    dispatcherRecord(req,res)
})

//Zalora Export Return
router.get('/return', (res,req) => {
    res.render('return')
})

router.post('/success', (req,res) => {
    exportReturn(req,res)
})

//Zalora Self Collect
router.get('/selfcollect', (req,res) => {
    res.render('selfcollect')
})

router.post('/selfcollect', (req,res) => {
    selfCollect(req,res)
})
/*************************** ZALORA *********************************/



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

router.get('/central',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

router.get('/pharmacyin',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

router.get('/pharmacyout',(req,res) => {
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
    zaloraInventory.findOneAndUpdate({trackingNumber:tracker},{$push:{
        status: {
            statusDetail:"Out for Delivery",
            date:req.body.dateCreate,
            }
        }
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
    let statusDetail = "IN WAREHOUSE"+"/"+req.body.area+"/"+req.body.dateEntry
    let bin = req.body.area +"/"+req.body.dateEntry
    let inventory = new zaloraInventory({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact: req.body.contact,
       address: req.body.address,
       area: req.body.area,
       product: req.body.formMETHOD,
       value: req.body.value,
       bin: bin,
       reEntry: "FALSE",
       reason: req.body.reason,
       remark: req.body.reason,
       reEntry: req.body.reEntry,
       attemp: req.body.attemp,
       reSchedule: req.body.reSchedule,
       dateEntry: req.body.dateEntry,
    })
    inventory.status.push({
        statusDetail: statusDetail,
        date: req.body.dateEntry,
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


module.exports = router;