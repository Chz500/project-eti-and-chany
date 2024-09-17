import { Component } from '@angular/core';
import { Invoice } from '../../../modules/invoice';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../modules/customer';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-invoice.component.html',
  styleUrl: './new-invoice.component.scss'
})
export class NewInvoiceComponent {
  today: Date = new Date();
  allcustomers = new Array<Customer>();
  thisUserId?:number
  newInvoice: Invoice = { paymentOptions:'',details:'',sum:0 ,invoicId:0,date:'',user:{email:'',customerName:'',custId:0}}
  constructor(private dataServices: DataService,private router: Router) { }
  addInvoice() {

    let  selectUser=this.allcustomers.filter(cust=>cust.custId==this.thisUserId)
    console.log({selectUser},this.thisUserId);
    this.newInvoice.user=selectUser[0]
    console.log("addInvoice",this.newInvoice);
    this.dataServices.addInvoice(this.newInvoice).subscribe(data => {
      console.log({ data });
      this.router.navigate(['../listInvoices'])
    })
  }
  ngOnInit(){
    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
  }
  validateDate() {
    const selectedDate = new Date(this.newInvoice.date);
    console.log(this.newInvoice.date);
    const todayDate = new Date();
    if (selectedDate < todayDate) {
      this.newInvoice.date = '';
    }
  }
}
