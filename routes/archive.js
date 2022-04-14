result = data
        console.log(result)
        console.log(data.count)
        if (data.count = 0 || data.count <= 3) {
            data.count = data.count + 1
            console.log(data.count)
        }else if (data.count > 3){
            console.log("RETURN")
        } 


function berakas_1(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE/AC/PN",
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
            res.redirect ('login')
        }
    })
}

function berakas_2(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [B2]",
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
            res.redirect ('login')
        }
    })
}

function gadong_1(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [G1]",
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
            res.redirect ('login')
        }
    })
}

function gadong_2(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [G2]",
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
            res.redirect ('login')
        }
    })
}

function jalanTutong_1(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [JT1]",
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
            res.redirect ('login')
        }
    })
}

function jalanTutong_2(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [JT2]",
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
            res.redirect ('login')
        }
    })
}

function jalanTutong_3(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [JT3]",
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
            res.redirect ('login')
        }
    })
}

function tutong(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [TU]",
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
            res.redirect ('login')
        }
    })
}

function belait(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [BE]",
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
            res.redirect ('login')
        }
    })
}

function temburong(req,res){
    let inventory = new inventoryDB({
       trackingNumber: req.body.trackingNumber,
       name: req.body.name,
       contact1: req.body.contact1,
       address: req.body.address,
       area: req.body.area,
       date: req.body.entry,
       product: req.body.formMETHOD,
       value: req.body.value,
       status: "IN WAREHOUSE [TE]",
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
            res.redirect ('login')
        }
    })
}



function pharmacyB1(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [B1]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyB2(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [B2]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyG1(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [G1]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyG2(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [G2]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyJT1(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [JT1]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyJT2(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [JT2]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyJT3(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [JT3]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyTutong(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [TU]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyBelait(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [BE]",
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
            res.redirect ('inventory')
        }
    })
}

function pharmacyTemburong(req,res){
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
       status: "IN WAREHOUSE (MED ROOM) [TE]",
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
            res.redirect ('inventory')
        }
    })
}


router.get('/io',(req,res)=> {
    res.render('io')
})

router.post('/test', (req,res) => {
    itemout(req,res)
})

function itemout(req,res){
    let pod = new podDB({
        assignTo: req.body.assignment,
        compileBy: req.body.madeBy,
        dateCompiled: req.body.dateMade,
        dateSchedule: req.body.dateSchedule,
        totalParcel: req.body.totalParcel,
        areaCode: req.body.areaCode,
        product: req.body.areaCode,
        remark: req.body.remarks,
        podContent: req.body,
    })
    console.log(podContent)
    pod.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Please check'
                })
            }
        }else {
            res.render ('login')
        }
    })
}



function selfCollect(req,res) {
    let selfCollect = new selfCollectDB ({
        trackingNumber: req.body.trackingNumber,
        name: req.body.name,
        contact1: req.body.contact1,
        date: req.body.complete,
        product: req.body.formMETHOD,
        value: req.body.value,
        status: "COMPLETE (SELF COLLECT)"
    })
    selfCollect.save((err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000){
                res.render('error', {
                    error_code: '11000',
                    head:'Invalid Entry',
                    message:'Please check'
                })
            }
        }else {
            res.redirect ('login')
        }
    })
}










///////////

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


///////////////////
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
