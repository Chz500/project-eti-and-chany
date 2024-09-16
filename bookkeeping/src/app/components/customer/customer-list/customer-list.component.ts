import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '../../../modules/interfaces';
import { DataService } from '../../../services/data.service';
import { AccordionModule } from 'primeng/accordion';
import { InvoicesListComponent } from "../../Invoices/invoices-list/invoices-list.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewCustomerComponent } from "../new-customer/new-customer.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, AccordionModule, InvoicesListComponent, RouterLink, RouterLinkActive, NewCustomerComponent],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  ifToAdd = false
  allcustomers = new Array<Customer>();
  showInvoiceById=false
  constructor(private dataServices: DataService) {
    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
  }
  getInvoiceById(){
    console.log("getInvoiceById");
    
   this.showInvoiceById=true
  }
  add(){
    this.ifToAdd=true
  }

}