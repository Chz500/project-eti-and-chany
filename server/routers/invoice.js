const express=require('express');
const { addInvoice,getAllInvoices,getInvoiceById,getInvoiceByMonth,getInvoiceByYear,getInvoiceBetween,getInvoiceByUserId} = require('../modules/invoice');


const router=express.Router()

router.post('/addInvoice',express.json(),async(req,res)=>{
    try{
        const invoice=req.body;
        const newInvoice=await addInvoice(invoice) 
        res.status(201).json(newInvoice)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})
router.get('/getAllInvoices',async(_,res)=>{
    try{
        const allInvoices=await getAllInvoices() 
        res.status(201).json(allInvoices)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoicesById/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const allInvoices=await getInvoiceById(parseInt(id)) 
        res.status(201).json(allInvoices)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoicesByMonth/:month',async(req,res)=>{
    try{
        const {month} = req.params
        const invoiceByMonth=await getInvoiceByMonth(parseInt(month)) 
        console.log({invoiceByMonth});
        res.status(201).json(invoiceByMonth)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})


router.get('/getInvoicesByYear/:year',async(req,res)=>{
    try{
        const {year} = req.params
        const invoiceByMonth=await getInvoiceByYear(parseInt(year)) 
        res.status(201).json(invoiceByMonth)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getInvoicesBetween/:date1/:date2',async(req,res)=>{
    try{
        const {date1,date2} = req.params
        const newDate1=new Date(date1)
        const newDate2=new Date(date2)
        const invoiceByMonth=await getInvoiceBetween(newDate1,newDate2) 
        res.status(201).json(invoiceByMonth)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})
router.get('/getInvoicesByUserId/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const allInvoices=await getInvoiceByUserId(parseInt(id)) 
        res.status(201).json(allInvoices)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})
module.exports=router