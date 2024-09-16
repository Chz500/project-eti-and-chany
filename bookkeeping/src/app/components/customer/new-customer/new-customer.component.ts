import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Customer } from '../../../modules/interfaces';

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
      address:new FormControl(''),
      status:new FormControl('')
    })
  }

  save(){
    const { controls } = this.myForm
    let customer:Customer={
      customerName : controls['customerName'].value,
      address : controls['address'].value,
      status : controls['status'].value
    }
    this.dataService.addCustomer(customer).subscribe(data=>{
      console.log({data});
      this.myForm.reset()
    })
    
  }
}
