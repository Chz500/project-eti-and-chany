const express=require('express');
const { addCustomer,existCustomerName ,getAllCustomers,getCustomersById} = require('../modules/customers');


const router=express.Router()
router.get('/checkcustomername/:customername',async(req,res)=>{
    try{
        const{customername}=req.params
        console.log(customername);
        const response=await existCustomerName(customername)
        console.log({response});
        res.status(200).json({exist:response})
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.post('/addCustomer',express.json(),async(req,res)=>{
    try{
        const customer=req.body;
        const newCustomer=await addCustomer(customer) 
        res.status(201).json(newCustomer)
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
router.get('/getAllCustomers',async(_,res)=>{
    try{
        const allCustomers=await getAllCustomers() 
        res.status(201).json(allCustomers)
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

router.get('/getCustomersById/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const allCustomers=await getCustomersById(parseInt(id)) 
        res.status(201).json(allCustomers)
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