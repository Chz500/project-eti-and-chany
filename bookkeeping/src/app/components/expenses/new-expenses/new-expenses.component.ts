import { Component } from '@angular/core';
import { Expenses } from '../../../modules/expenses';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-expenses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-expenses.component.html',
  styleUrl: './new-expenses.component.scss'
})
export class NewExpensesComponent {
  newExpenses: Expenses = { date: '',  sum: 0,detail:'',paymentOptions:'' }
  constructor(private dataServices: DataService,private router: Router) { }

  addExpensees() {
    console.log("addExpensees",this.newExpenses);

    this.dataServices.addExpensees(this.newExpenses).subscribe(data => {
      console.log({ data });
      this.router.navigate(['../listExpenses'])

    })
  }
}
