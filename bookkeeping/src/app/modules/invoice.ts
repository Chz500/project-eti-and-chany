import { Customer } from "./interfaces"

export interface Invoice {
    invoicId:number
    paymentOptions:string
    user:Customer
    sum:number
    Prote:string
    date:string
}
// export interface Receipt {
//     receiptNumber: number,
//     customer: Customer,
//     sum: number,
//     paymentMethods:string,
//     date:Date,
//     description:string
// }
