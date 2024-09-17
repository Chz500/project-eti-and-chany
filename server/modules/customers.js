require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utils/types')
const mongoOperations = new MongoOperations(process.env.MONGO_BOOKKEEPING_DB)

const existCustomerName = async (customerName) => {
    mongoOperations.Collection = process.env.MONGO_CUSTOMERS_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: { customerName: customerName } })
        return response.length > 0
    } catch (error) {
        throw error
    }
}


//user מקבלת
// ושולחים אותה ל
//db
const addCustomer = async (customer) => {
    //TODO:check user object
    if (await existCustomerName(customer.customerName)) {
        const error = {
            message: `customerName '${customer.customerName}' is not available`,
            type: errorTypes.VALIDATION
        }
        throw error
    }
    // const id = v4()
    const arr = await getAllCustomers()
    const custId = arr.length > 0 ? Math.max(...arr.map(obj => obj.custId)) + 1 : 1;
    customer.custId = custId
    // TODO:save user in db
    try {
        mongoOperations.Collection = process.env.MONGO_CUSTOMERS_COLLECTION
        const response = await mongoOperations.insertItem(customer)
        return customer
    }
    catch (error) {
        throw error
    }
}

const getAllCustomers = async () => {
    mongoOperations.Collection = process.env.MONGO_CUSTOMERS_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: {} })
        return response
    } catch (error) {
        throw error
    }
}

const getCustomersById = async (id) => {
    mongoOperations.Collection = process.env.MONGO_CUSTOMERS_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: { custId: id } })
        return response
    } catch (error) {
        throw error
    }
}
module.exports = { addCustomer, existCustomerName, getAllCustomers, getCustomersById }