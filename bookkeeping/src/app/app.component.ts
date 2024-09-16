
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewCustomerComponent } from './components/customer/new-customer/new-customer.component';
import { DataService } from './services/data.service';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from "./components/Invoices/invoices-list/invoices-list.component";
import { ExpensesListComponent } from "./components/expenses/expenses-list/expenses-list.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewCustomerComponent,
    CustomerListComponent,
    TabViewModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    InvoicesListComponent,
    ExpensesListComponent,
    HomeComponent
],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookkeeping';
}