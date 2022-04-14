const express = require('express');
const router = express.Router();
const moment = require('moment')
const bcrypt = require('bcrypt')
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

router.post('/registerSuccess', (req,res) => {
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
    let name = body.name
    let ic = body.icNumber
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
                    message:'User IC-Number / Social Security Number already in Database'
                })
            }
        }else {
            res.render ('success', {
                head: "Account Created",
                message: `Account for user ${name} successfuly created. Login ID ${ic}.`,
            })
        }
    })
}

function login(req,res){
    let icNumber = req.body.icNumber
    let password = req.body.password
    userDB.authenticate(icNumber, password, (err, user) =>{
        let firstTime = user.firstTime
        let position = user.position
        console.log(firstTime)
        if(firstTime === "TRUE"){
            res.render('changepassword', {icNumber: icNumber})
        }
        else if (firstTime === "FALSE"){
            if (position == "AD"){res.render('dashboard')}
            else if (position == "TC"){res.render('dashboardfin')}
            else if (position == "CS"){res.render('')}
            else if (position == "WS"){res.render('')}
            else if (position == "MW"){res.render('')}
            else if (position == "TW"){res.render('')}
            else if (position == "DIS"){res.render('')}
            else if (position == "FIN"){res.render('')}
            else {res.render('error',{
                error_code: '1', //access control error
                head:'Invalid Access',
                message:'Failed to detect access for user',
                solution: "Please inform RDI, EXT 877"
            })}
        }
        else{
            res.render('error', {
                error_code: '2',
                head:'Invalid Entry',
                message:'test',
                solution: "none"
            })
        }
    })
}

function firstTimeLogin(req,res){
    let filter = {icNumber: req.body.icNumber}
    console.log(filter)
    let password = req.body.password
    bcrypt.hash(password, 10, (err,hash) => {
        if(err) console.log(err)
        password = hash
        let update = {password: password, firstTime:"FALSE"}
        console.log(update)
        userDB.findOneAndUpdate(filter, update, (err,user) => {
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
                res.render('login')
            }
        })
    })   
}

/*************************** USER *********************************/

/*************************** ZALORA *********************************/
/*
Add on:
2. recheck on zalora pod
3. add status array to required functions
4. ageing need to be check
5. export function need testing
6. create simple reports (end of day report)
*/

//use to get all zalora inventory list
router.get('/itemList', (req,res) => {
    zaloraInventory.find({}, function(err,zaloraInventory){
        res.render('itemList', {
            itemList: zaloraInventory,
        })
    })
})

router.get('/itemListHistory', (req,res) => {
    zaloraInventory.find({}, function(err,zaloraInventory){
        res.render('itemListHistory', {
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

router.post('/confirm',(req,res) => {
    itemOut(req,res)
})

router.get('/pod', (req,res) => {
    res.render('pod')
})

router.post('/pod', (req,res) => {
    pod(req,res)
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
router.get('/return', (req,res) => {
    let zaloraList = []
    zaloraInventory.find({} , (err,zaloraInventory) => {
        zaloraInventory.forEach(function(zaloraInventory){
            zaloraList.push(zaloraInventory)
        })
        res.render('return',{
            zalora: zaloraList,
        })
    })
   
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
    let date = moment().format()
    let filter = {trackingNumber: req.body.trackingNumber}
    let update = {status: "RETURN TO MY" + "|" + date}
    let option = {upsert: true, new: true}
    let history = {history: {statusDetail: "RETURN TO MY" + "|" + date}}
    zaloraInventory.findOneAndUpdate(filter,{$push: history}, option, (err,docs) => {
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
    zaloraInventory.findOneAndUpdate(filter,update, option, (err,docs) => {
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
    let date = moment().format()
    let ref = "GR/Dispatch/" + dispatch.name + date
    let dispatcher = new dispatchDB({
        ref: ref,//Auto generate
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

function itemOut(req,res){
    let date = moment().format()
    let count = req.body.count + 1
    let tracker = {trackingNumber: req.body.trackingNum}
    let update = {status: "OUT FOR DELIVERY" + "[" + req.body.agentName + "]" + "|" + date, count: count}
    let history = {history: {statusDetail: "OUT FOR DELIVERY" + "[" + req.body.agentName + "]"  + "|" + date }}
    let option = {upsert: true, new: true}
    zaloraInventory.findOneAndUpdate(tracker,{$push: history}, option)
    zaloraInventory.findOneAndUpdate(tracker,update,option)
    zaloraInventory.find({}, (err, zaloraInventory) =>{
        res.redirect('itemout', {
            itemList: zaloraInventory,
        })
    })
}


//Zalora Starts here
function pod(req,res){
    let body = req.body
    let ref = "GR/POD/" + body.agentName + body.areaCode
    let content = req.body.content
    let itemOut = new podDB({
        podRef: ref, //ref is auto generated by the system. To differentiate the products delivered
        podAssign: body.agentName,
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
       parcelNumber: req.body.parcelNumber,
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
       count: 0,
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

router.get('/pharmacyin',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

router.post("/pharmacyin",(req,res) => {
    pharmacyIn(req,res)
})

router.get('/pharmacyout',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})

router.get('pharmacySelf',(req,res) => {
    res.render('pharmacyself')
})

router.get('pharmacySelf',(req,res) => {
    pharmaSelfCollect(req,res)
})

//Pharmacy In
function pharmacyIn (req,res){
    let parcelStatus = {statusDetail: "IN MED ROOM"+"["+req.body.area+"]"+ "|" + req.body.dateEntry}
    let bin = req.body.area +"/"+req.body.dateEntry
    let inventory = new pharmacyInventory({
       trackingNumber: req.body.trackingNumber,
       parcelNumber: req.body.parcelNumber + "[" + req.body.area + "]",
       name: req.body.name,
       contact: req.body.contact,
       address: req.body.address,
       area: req.body.area,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN MED ROOM" + "[" + req.body.area + "]",
       bin: bin,
       reEntry: "FALSE",
       reason: req.body.reason,
       remark: req.body.reason,
       attemp: "FALSE",
       reSchedule: req.body.reSchedule,
       dateEntry: req.body.dateEntry,
    })
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
            res.redirect ('pharmain')
        }
    })
}

//Self Collect Pharmacy
function pharmaSelfCollect(req,res){
    let date = moment().format();
    let filter = {trackingNumber: req.body.trackingNumber}
    let update = {status: "SELF COLLECTED" + " | " + date}
    let history = {history: {statusDetail: "SELF COLLECTED" + " | " + date}}
    let option = {upsert: true, new: true}
    console.log(req.body.trackingNumber)
    pharmacyInventory.findOneAndUpdate(filter,{$push: history}, option)
    pharmacyInventory.findOneAndUpdate(filter, update, option, (err,docs) => {
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
            res.render('success', {
                head: `successfully update the warehouse management system`,
                message: `Item collected at ${date}`
            })
        } 
    })
}

/*************************** PHARMACY *********************************/

/*************************** GO RUSH MALAYSIA *********************************/
router.get('/grpmy',(req,res) => {
    res.render('comingsoon', {
        head: "Page in development",
        message: "Coming Soon"
    })
})


//Chances of Tookan to push accurately....?
//Does Tookan able to push to Mongo???
//Does DHL Require to Download???

//After DHL Pickup
function iteminMy(req,res){
    let date = moment().format()
    let parcelStatus = "IN WAREHOUSE[MY]" + " | " + date
    let body = req.body
    let myInventory = new myInventoryDB ({
        trackingNumber: body.trackingNumber,
        name: body.name,
        address: body.address,
        contact: body.contact,
        value: body.value,
        stasus: "IN WAREHOUSE[MY]",
        product: body.formMETHOD,
        tag: body.tag,
        dateArrive: body.dateArrive,
    }) 
    myInventory.history.push(parcelStatus)
    myInventory.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Tracking Number already exist within the database'
                })
            }
        }else {
            res.redirect ('myin')
        }
    })
}

//Item Out for Transit to BN
function manifest(req,res){
    //let date = moment().format()
    //let parcelStatus = "IN TRANSIT TO BN" + " | " + date
    //let history = {history: {statusDetail: "SELF COLLECTED" + " | " + date}}
    let manifestList = []
    myInventoryDB.find({}, (err,results) => {
        results.forEach((result) => {
            if(result.something == "something"){
                myInventoryDB.push(result)
            }
        })
    })
}


/*************************** GO RUSH MALAYSIA *********************************/

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

module.exports = router;
