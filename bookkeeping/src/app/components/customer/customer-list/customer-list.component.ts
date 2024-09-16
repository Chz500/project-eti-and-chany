import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '../../../modules/interfaces';
import { DataService } from '../../../services/data.service';
import { AccordionModule } from 'primeng/accordion';
import { InvoicesListComponent } from "../../Invoices/invoices-list/invoices-list.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, AccordionModule, InvoicesListComponent,RouterLink,RouterLinkActive],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
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
}