import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-or-year',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './month-or-year.component.html',
  styleUrl: './month-or-year.component.scss'
})
export class MonthOrYearComponent {
  selectedIOrE?:string
  monthOrYear?:string
  selected?:number
  constructor(private router: Router){}
  search(){
    if(this.selectedIOrE==="invoices")
      if(this.monthOrYear==="month")
        this.router.navigate(['../listInvoices'], { queryParams: {month:this.selected}})
      else{
        this.router.navigate(['../listInvoices'], { queryParams: {year:this.selected}})
      }
  else{
    if(this.monthOrYear==="month")
      this.router.navigate(['../listExpenses'], { queryParams: {month:this.selected}})
    else{
      this.router.navigate(['../listExpenses'], { queryParams: {year:this.selected}})
    }
  }
  }
}
