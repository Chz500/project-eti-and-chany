import { Component } from '@angular/core';
import { NewCustomerComponent } from '../customer/new-customer/new-customer.component';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  NewCustomerComponent,
    CustomerListComponent,
    TabViewModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
