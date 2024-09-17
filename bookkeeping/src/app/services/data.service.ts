import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../modules/customer';
import { Observable } from 'rxjs';
import { Expenses } from '../modules/expenses';
import { Invoice } from '../modules/invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "http://127.0.0.1:5780/accountsManager"
  constructor(private http:HttpClient) { }

  addCustomer(newCustomer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.baseUrl}/addCustomer`,
      newCustomer ,{headers: { 'content-type': "application/json" }})
  }
  addExpensees(newExpens:Expenses):Observable<Expenses>{
    return this.http.post<Expenses>(`${this.baseUrl}/addExpense`,
      newExpens ,{headers: { 'content-type': "application/json" }})
  }
  addInvoice(newInvoice:Invoice):Observable<Invoice>{
    return this.http.post<Invoice>(`${this.baseUrl}/addInvoice`,
      newInvoice ,{headers: { 'content-type': "application/json" }})
  }
  getAllCustomers():Observable<Array<Customer>>{
     return this.http.get<Array<Customer>>(`${this.baseUrl}/getAllCustomers`)
  }
  getAllInvoice():Observable<Array<Invoice>>{
    return this.http.get<Array<Invoice>>(`${this.baseUrl}/getAllInvoices`)
 }
  getAllExpenses():Observable<Array<Expenses>>{
    return this.http.get<Array<Expenses>>(`${this.baseUrl}/getAllExpenses`)
 }
 getInvoiceByCustId(custId:number):Observable<Array<Invoice>>{
  return this.http.get<Array<Invoice>>(`${this.baseUrl}/getInvoicesByUserId/${custId}`)
}
getInvoiceBeetwin2Dates(fromDate:Date,untileDate:Date):Observable<Array<Invoice>>{
  return this.http.get<Array<Invoice>>(`${this.baseUrl}/getInvoicesBetween/${fromDate}/${untileDate}`)
}
getExpensesBeetwin2Dates(fromDate:Date,untileDate:Date):Observable<Array<Expenses>>{
  return this.http.get<Array<Expenses>>(`${this.baseUrl}/getExpensesBetween/${fromDate}/${untileDate}`)
}
getInvoiceByYear(year:string):Observable<Array<Invoice>>{
  return this.http.get<Array<Invoice>>(`${this.baseUrl}/getInvoicesByYear/${year}`)
}
getExpensesByYear(year:string):Observable<Array<Expenses>>{
  return this.http.get<Array<Expenses>>(`${this.baseUrl}/getExpensesByYear/${year}`)
}
getInvoiceByMonth(month:string):Observable<Array<Invoice>>{
  return this.http.get<Array<Invoice>>(`${this.baseUrl}/getInvoicesByMonth/${month}`)
}
getExpensesByMonth(month:string):Observable<Array<Expenses>>{
  return this.http.get<Array<Expenses>>(`${this.baseUrl}/getExpensesByMonth/${month}`)
}
}
