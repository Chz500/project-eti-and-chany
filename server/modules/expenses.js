require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utils/types')
const mongoOperations = new MongoOperations(process.env.MONGO_BOOKKEEPING_DB)

const addExpens = async (expens) => {
    const arr = await getAllExpenses()
    const expensId = arr.length > 0 ? Math.max(...arr.map(obj => obj.expensId)) + 1 : 1;
    expens.expensId = expensId
    expens.date = new Date(expens.date)
    try {
        mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION
        const response = await mongoOperations.insertItem(expens)
        console.log({ response })
        return expens
    }
    catch (error) {
        throw error
    }
}

const getAllExpenses = async () => {
    mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: {} })
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getExpenssById = async (id) => {
    mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: { expensId: id } })
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getExpensesByMonth = async (month) => {

    try {
        mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION

        const allExpenses = await mongoOperations.find({ filter: {} })
    
        const allExpensesByMonth = allExpenses.filter(item => item.date.getMonth() === month - 1)
        return allExpensesByMonth
    }
    catch (error) {
        throw error
    }
}

const getExpensesByYear = async (year) => {

    try {
        mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION
        const allExpenses = await mongoOperations.find({ filter: {} })

        const allExpensesByMonth = allExpenses.filter(item => item.date.getFullYear() === year)
        return allExpensesByMonth
    }
    catch (error) {
        throw error
    }
}

const getExpensesBetween= async (date1,date2) => {

    try {
        mongoOperations.Collection = process.env.MONGO_EXPENSES_COLLECTION

        const allExpenses = await mongoOperations.find({ filter: {} })
    
        const allExpensesByMonth = allExpenses.filter(item => item.date >date1&& item.date<=date2)
        return allExpensesByMonth
    }
    catch (error) {
        throw error
    }
}

module.exports = { addExpens, getExpenssById, getAllExpenses, getExpensesByMonth, getExpensesByYear,getExpensesBetween }