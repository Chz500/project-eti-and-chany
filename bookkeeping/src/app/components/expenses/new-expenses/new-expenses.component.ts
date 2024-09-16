import { Component } from '@angular/core';
import { Expenses } from '../../../modules/expenses/expenses';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-expenses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-expenses.component.html',
  styleUrl: './new-expenses.component.scss'
})
export class NewExpensesComponent {
  newExpenses: Expenses = { date: '',  sum: 0,detail:'',paymentMethods:'' }
  constructor(private dataServices: DataService) { }

  addExpenses() {
    console.log("addExpenses",this.newExpenses);

    this.dataServices.addExpenses(this.newExpenses).subscribe(data => {
      console.log({ data });
    })
  }
}
