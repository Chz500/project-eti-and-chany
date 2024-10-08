import { Component } from '@angular/core';
import { Expenses } from '../../../modules/expenses';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [Validators],
  templateUrl: './new-expenses.component.html',
  styleUrl: './new-expenses.component.scss'
})
export class NewExpensesComponent {
  today: Date = new Date();
  newExpenses: Expenses = { date: '', sum: 0, detail: '', paymentOptions: '' }
  constructor(private dataServices: DataService, private router: Router) { }

  addExpensees() {
    this.dataServices.addExpensees(this.newExpenses).subscribe(data => {
      this.router.navigate(['../listExpenses'])
    })
  }
  validateDate() {
    const selectedDate = new Date(this.newExpenses.date);
    const todayDate = new Date();
    if (selectedDate < todayDate) {
      this.newExpenses.date = '';
    }
  }
}
