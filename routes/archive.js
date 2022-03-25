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