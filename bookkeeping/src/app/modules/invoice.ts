import { Customer } from "./customer"
export interface Invoice {
    invoicId:number
    date:string
    sum:number
    paymentOptions:string
    user:Customer
    details:string
}

