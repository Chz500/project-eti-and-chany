import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '../../modules/interfaces';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-by-cust-id',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './by-cust-id.component.html',
  styleUrl: './by-cust-id.component.scss'
})
export class ByCustIdComponent {
  allcustomers = new Array<Customer>();
  selectedId?:number
  constructor(private dataServices: DataService,private router: Router) {
    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
  }
  serch(){
    this.router.navigate(['../listInvouce'], { queryParams: { custId: this.selectedId } })
  }
}
