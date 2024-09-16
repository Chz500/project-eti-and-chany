import { Component } from '@angular/core';
import { Invoice } from '../../../modules/invoice';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss'
})
export class NewInvoiceComponent {
  newInvoice: Invoice = { paymentOptions:'',Prote:'',sum:0 ,invoicId:0,date:'',user:{address:'',customerName:'',status:'',custId:0}}
  constructor(private dataServices: DataService) { }
  addExpenses() {
    console.log("=====");
    
    console.log("addInvoice",this.newInvoice);
    
    this.dataServices.addInvoice(this.newInvoice).subscribe(data => {
      console.log({ data });
    })
  }
}
