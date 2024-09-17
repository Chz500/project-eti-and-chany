const express=require('express');
const { addExpense,getAllExpenses,getExpenssById,getExpensesByMonth,getExpensesByYear,getExpensesBetween} = require('../modules/expenses');


const router=express.Router()
router.post('/addExpense',express.json(),async(req,res)=>{
    try{
        const expens=req.body;
        const newExpens=await addExpense(expens) 
        res.status(201).json(newExpens)
    }
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})
router.get('/getAllExpenses',async(_,res)=>{
    try{
        const allExpenses=await getAllExpenses() 
        res.status(201).json(allExpenses)
    }
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getExpensesById/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const allExpenses=await getExpenssById(parseInt(id)) 
        res.status(201).json(allExpenses)
    }
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getExpensesByMonth/:month',async(req,res)=>{
    try{
    const {month}=req.params
    const response = await getExpensesByMonth(parseInt(month))
    res.status(201).json(response)
    } 
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getExpensesByYear/:year',async(req,res)=>{
    try{
    const {year}=req.params
    const response = await getExpensesByYear(parseInt(year))
    res.status(201).json(response)
    } 
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

router.get('/getExpensesBetween/:getDate1/:getDate2',async(req,res)=>{
    try{
    const {getDate1,getDate2}=req.params
    const date1 =new Date (getDate1)
    const date2=new Date (getDate2)
    const response = await getExpensesBetween(date1,date2)
    res.status(201).json(response)
    } 
    catch(error){
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
}
)
module.exports=router