require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')

const { errorTypes } = require('../utils/types')
const mongoOperations = new MongoOperations(process.env.MONGO_BOOKKEEPING_DB)




//user מקבלת
// ושולחים אותה ל
//db
const addInvoice = async (invoice) => {

    const arr = await getAllInvoices()
    const invoiceId = arr.length > 0 ? Math.max(...arr.map(obj => obj.invoiceId)) + 1 : 1;
    invoice.invoiceId = invoiceId
    invoice.date = new Date(invoice.date)
    try {
        mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
        const response = await mongoOperations.insertItem(invoice)
        console.log({ response })
        return invoice
    }
    catch (error) {
        throw error
    }
}

const getAllInvoices = async () => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: {} })
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getInvoiceById = async (id) => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: { invoiceId: id } })
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getInvoiceByMonth = async (month) => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
        const all = await mongoOperations.find({ filter: {} })
        const response = all.filter(item => item.date.getMonth() === month - 1)
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getInvoiceByYear = async (year) => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
        console.log(year);
        const all = await mongoOperations.find({ filter: {} })
        const response = all.filter(item =>
            item.date.getFullYear() === year)
        console.log({ response });
        return response
    } catch (error) {
        throw error
    }
}

const getInvoiceBetween = async (date1, date2) => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
console.log(date1,date2);

        const all = await mongoOperations.find({ filter: {} })
        const response = all.filter(item =>
            item.date > date1 && item.date <= date2)
        console.log("date",{ response });
        return response
    } catch (error) {
        throw error
    }
}

const getInvoiceByUserId = async (id) => {
    mongoOperations.Collection = process.env.MONGO_INVOICING_COLLECTION
    try {
        const all = await mongoOperations.find({ filter: {} })
        const response = all.filter(item => item.user.custId == id)
        console.log("=============================");
        
        console.log({response});
        
        return response
    } catch (error) {
        throw error
    }
}

module.exports = { getAllInvoices, addInvoice, getInvoiceById, getInvoiceByMonth, getInvoiceByYear, getInvoiceBetween,getInvoiceByUserId }