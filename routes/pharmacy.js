//Pharmacy Out
function pharmacyOut (req,res){
let date = moment().format()
    let tracker = {trackingNumber: req.body.trackingNum}
    let update = {status: "OUT FOR DELIVERY" + "[" + req.body.agentName + "]" + "|" + date}
    let history = {history: {statusDetail: "OUT FOR DELIVERY" + "[" + req.body.agentName + "]"  + "|" + date }}
    let option = {upsert: true, new: true}
    zaloraInventory.findOneAndUpdate(tracker,{$push: history}, option, (err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10-A",
                message: "Failed to push update todatabase",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else {
            console.log('update success (push history)')
            //let date = req.body.dateSchedule
            res.render('itemout')
        } 
    })
    zaloraInventory.findOneAndUpdate(tracker,update,option,(err,docs) => {
        if(err){
            console.log(err)
            res.render('error',{
                head: "Error",
                code: "10-B",
                message: "Failed to update database",
                solution: "Please contact RDI Department ext 877"
            })
        } 
        else {
            console.log('update success')
           //let date = req.body.dateSchedule
            res.render('itemout')
        } 
    })
    zaloraInventory.findOne(tracker, (err,result) => {
        let count = result.count
        console.log(count)
        
        if (result) {
            if(count = 0 || count <= 3) {
                let newcount = count + 1
                result.count = newcount
                result.save()
                console.log(newcount)
                console.log(result.count)
            }
            else if (count >= 4){
                res.render('limit', {
                    head: "Max limit reached",
                    message: "Parcel reach maximum number of attempts",
                    solution: "Please inform warehouse supervisor to schedule for return.",
                })
            }
        }
        else console.log(err)
    })
}

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