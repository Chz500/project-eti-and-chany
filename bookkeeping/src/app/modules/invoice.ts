import { Customer } from "./interfaces"

export interface Invoice {
    invoicId:number
    paymentOptions:string
    user:Customer
    sum:number
    details:string
    date:string
}

