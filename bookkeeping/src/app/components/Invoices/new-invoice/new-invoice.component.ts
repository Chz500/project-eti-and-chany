import { Component } from '@angular/core';
import { Invoice } from '../../../modules/invoice';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../modules/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss'
})
export class NewInvoiceComponent {
  allcustomers = new Array<Customer>();
  thisUserId?:number
  newInvoice: Invoice = { paymentOptions:'',details:'',sum:0 ,invoicId:0,date:'',user:{address:'',customerName:'',status:'',custId:0}}
  constructor(private dataServices: DataService) { }
  addInvoice() {

    let  selectUser=this.allcustomers.filter(cust=>cust.custId==this.thisUserId)
    console.log({selectUser},this.thisUserId);
    this.newInvoice.user=selectUser[0]
    console.log("addInvoice",this.newInvoice);
    this.dataServices.addInvoice(this.newInvoice).subscribe(data => {
      console.log({ data });
    })
  }
  ngOnInit(){
    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
  }
}
