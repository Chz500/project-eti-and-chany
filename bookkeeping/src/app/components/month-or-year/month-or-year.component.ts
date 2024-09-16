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
  selected?:string
  constructor(private router: Router){}
  serch(){
    if(this.selectedIOrE==="invoices")
      if(this.monthOrYear==="month")
        this.router.navigate(['../listInvouce'], { queryParams: {month:this.selected}})
      else{
        this.router.navigate(['../listInvouce'], { queryParams: {year:this.selected}})
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
