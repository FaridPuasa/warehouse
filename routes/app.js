const express = require('express');
const router = express.Router();
const moment = require('moment')
//Models listing
//const statusDB = require('../models/zaloraInventory')
const zaloraInventory = require('../models/zaloraInventory');
const userDB = require('../models/user')
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
const res = require('express/lib/response');

/*************************** USER *********************************/

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/success', (req,res) => {
    user(req,res)
})

router.get('/login', (req,res) => {
    res.render('login')
})

router.post('/dashboard', (req,res) => {
    login(req,res)
})

router.get('/changpassword', (req,res) => {
    res.render('changepassword')
})

router.post('/changesuccess', (req,res) => {
    firstTimeLogin(req,res)
})

function user(req,res) {
    let body = req.body
    let user = new userDB ({
        name: body.name,
        password: body.password, //auto generated
        position: body.position, //admin,GRP,Warehouse,CS,Dispatch
        icNumber: body.icNumber,
        email: body.email,
        contact: body.contact,
        firstTime: "TRUE"
    })
    user.save((err) => {
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
                head: "Account Created",
                message: "Account successfully created",
            })
        }
    })
}

function login(req,res){
    let icNumber = req.body.icNumber
    let password = req.body.password
    userDB.authenticate(icNumber, password, (error, user) =>{
        let status = user.firstTime
        if(status === "TRUE"){
            res.render('changepassword')
        }
        else if (status === "FALSE"){
            req.session.userId = user._id;
            res.render('success')
        }
        else{
            res.render('error')
        }
    })
}

function firstTimeLogin(req,res){
    let icNumber = req.body.icNumber
    let password = req.body.password
    userDB.findOneAndUpdate({icNumber:icNumber},{password:password, firstTime:"FALSE"}, (err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                error_code: "10",
                message: "Failed to Update Password",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else{
            res.redirect('login')
        }
    })
}

/*************************** USER *********************************/

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
            itemList: zaloraInventory,
        })
    })
})

router.get('/dispatcher-report', (req,res) => {
    dispatchDB.find({}, function(err,dispatch) {
        res.render('dispatchreport', {
            dispatch: dispatch,
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

router.post('/reentryConfirm', (req,res) =>{
    reEntry(req,res)
})

//Zalora Dispatcher Report
router.get('/dispatch',(req,res) => {
    res.render('dispatch')
})

router.post('/dispatchSuccess', (req,res) => {
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
    res.render('selfCollect')
})

router.post('/confirmed', (req,res) => {
    selfCollect(req,res)
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
    let date = moment().format();
    let filter = {trackingNumber: req.body.trackingNumber}
    let history = {history: {statusDetail: "IN WAREHOUSE" + "[" + req.body.reason + "]" + "|" + date}}
    let update = {
        status: "IN WAREHOUSE" + "[" + req.body.reason + "]" + "|" + date,
        reason: req.body.reason,
        remark: req.body.remark,
        reEntry: "TRUE",
        reSchedule: req.body.dateSchedule,
    }
    let option = {upsert: true, new: true}
    zaloraInventory.findOneAndUpdate(filter, {$push: history}, option, (err,docs) => {
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
    zaloraInventory.findOneAndUpdate(filter,update,option, (err,docs) => {
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
    let date = req.body.dateCreate
    let tracker = {trackingNumber: req.body.trackingNum}
    let update = {status: "OUT FOR DELIVERY" + "|" + date}
    let history = {history: {statusDetail: "OUT FOR DELIVERY" + "|" + date }}
    let option = {upsert: true, new: true}
    zaloraInventory.findOneAndUpdate(tracker,{$push: history}, option)
    zaloraInventory.findOneAndUpdate(tracker,update,option)
    //1st bit is used to update the parcel status
    let body = req.body
    let content = req.body.content
    let itemOut = new podDB({
        podRef: body.podRef, //ref is auto generated by the system. To differentiate the products delivered
        podAssign: body.agent,
        podDate: body.dateAssign,
        podTotal: body.value, //Total amount of cash to be collected.
        podTotalParcel: body.parcel, //Total amount of parcel to be delivered.
        podClass: body.type, //Class is to identify who will be delivering. Freelancer or Full Time. 
        podProduct: body.product, //Product is used to identify the delivered product.
        podArea: body.areaCode,
        podCreate: body.dateCreate,
        podMade: body.madeBy,
    })
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

/*
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
*/

//
function itemin(req,res){
    let parcelStatus = {statusDetail: "IN WAREHOUSE"+"["+req.body.area+"]"+ "|" + req.body.dateEntry}
    let bin = req.body.area +"/"+req.body.dateEntry
    let inventory = new zaloraInventory({
       trackingNumber: req.body.trackingNumber,
       parcelNumber: req.body.parcelNumber + "[" + req.body.area + "]",
       name: req.body.name,
       contact: req.body.contact,
       address: req.body.address,
       area: req.body.area,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE" + "[" + req.body.area + "]",
       bin: bin,
       reEntry: "FALSE",
       reason: req.body.reason,
       remark: req.body.reason,
       attemp: "FALSE",
       reSchedule: req.body.reSchedule,
       dateEntry: req.body.dateEntry,
    })
    //console.log("IN WAREHOUSE"+"["+req.body.area+"]"+req.body.dateEntry)
    //console.log(parcelStatus)
    //console.log(bin)
    inventory.history.push(parcelStatus)
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
    let date = moment().format();
    let filter = {trackingNumber: req.body.trackingNumber}
    let update = {status: "SELF COLLECTED" + "|" + date}
    let history = {history: {statusDetail: "SELF COLLECTED" + "|" + date}}
    let option = {upsert: true, new: true}
    console.log(req.body.trackingNumber)
    zaloraInventory.findOneAndUpdate(filter,{$push: history}, option)
    zaloraInventory.findOneAndUpdate(filter, update, option, (err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else{
            console.log(docs)
            res.render('success')
        } 
    })
}
/*************************** ZALORA *********************************/

/*************************** PHARMACY *********************************/

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

module.exports = router;