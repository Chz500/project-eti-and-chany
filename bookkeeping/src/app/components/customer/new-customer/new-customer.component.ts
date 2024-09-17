import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Customer } from '../../../modules/customer';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss'
})
export class NewCustomerComponent {
  myForm: FormGroup

  constructor(private dataService : DataService)
  {
    this.myForm= new FormGroup ({
      customerName:new FormControl(''),
      email:new FormControl(''),
    })
  }

  save(){
    const { controls } = this.myForm
    let customer:Customer={
      customerName : controls['customerName'].value,
      email : controls['email'].value
    }
    this.dataService.addCustomer(customer).subscribe(data=>{
      console.log({data});
      this.myForm.reset()
      location.reload()
    })
    
  }
}
