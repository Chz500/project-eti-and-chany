const express=require('express')
const cors=require('cors')
const manager_router=require('./routers/manage')
const invoice_router=require('./routers/invoice')
const expenses_router=require('./routers/expenses')
const app=express()

app.get('/',(req,res) => {
   res.status(200).json({message: 'server is open'})
})

app.use(cors({
   origin:'http://localhost:4200'
}))

app.use('/accountsManager',manager_router)
app.use('/accountsManager',invoice_router)

app.use('/accountsManager',expenses_router)

module.exports=app