import { Component } from '@angular/core';
import { Expenses } from '../../../modules/expenses';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../modules/customer';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.scss'
})
export class ExpensesListComponent {
  allExpenses=new Array<Expenses>()
  constructor(private dataServices: DataService,private route: ActivatedRoute){
    this.dataServices.getAllExpenses().subscribe(data=>{
      this.allExpenses=data
    })
  }
  allcustomers = new Array<Customer>();
  // allExpevses = new Array<Expenses>();
  selectedCust?: number
  dateFrom?: Date
  untilDate?: Date
  month?: string
  year?: string
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dateFrom = params['dateFrom']
      this.untilDate = params['untilDate']
      this.month = params['month']
      this.year = params['year']
    });
;

    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });

  
      if (this.untilDate && this.dateFrom) {
        this.dataServices.getExpensesBeetwin2Dates(this.dateFrom, this.untilDate).subscribe(data => {
          this.allExpenses = data;
          console.log(this.untilDate)
        });
      }
      else
        if (this.month) {
          this.dataServices.getExpensesByMonth(this.month).subscribe(data => {
            this.allExpenses = data;
          });
        }
        else
          if (this.year){
            this.dataServices.getExpensesByYear(this.year).subscribe(data => {
              this.allExpenses = data;
            });
          }
          else
         {
           
           this.dataServices.getAllExpenses().subscribe(data => {
              this.allExpenses = data;
            });}
    }
  }

