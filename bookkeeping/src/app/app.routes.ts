import { Routes } from '@angular/router';
import { InvoicesListComponent } from './components/Invoices/invoices-list/invoices-list.component';
import { ExpensesListComponent } from './components/expenses/expenses-list/expenses-list.component';
import { ByCustIdComponent } from './components/by-cust-id/by-cust-id.component';
import { BetweenTwoDatesComponent } from './components/between-two-dates/between-two-dates.component';
import { MonthOrYearComponent } from './components/month-or-year/month-or-year.component';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { NewExpensesComponent } from './components/expenses/new-expenses/new-expenses.component';
import { NewInvoiceComponent } from './components/Invoices/new-invoice/new-invoice.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

export const routes: Routes = [
    { path: "listExpenses", component: ExpensesListComponent },
    { path: "listInvouce", component: InvoicesListComponent },
    { path: 'ByUserId', component: ByCustIdComponent },
    { path: 'Betwin2Month', component: BetweenTwoDatesComponent },
    { path: 'MonthOrYear', component: MonthOrYearComponent },
    { path: 'data segmentation', component: DataSegmentationComponent },
    { path: 'saving expenses', component: NewExpensesComponent },
    { path: 'newInvouce', component: NewInvoiceComponent },
    { path: 'customerList', component: CustomerListComponent }

];
