import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-between-two-dates',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './between-two-dates.component.html',
  styleUrl: './between-two-dates.component.scss'
})

export class BetweenTwoDatesComponent {
  dateFrom?:Date
  untilDate?:Date
  selectedIOrE?:string
  constructor(private router: Router){}
  serch(){
    if(this.selectedIOrE==="invoices")
    this.router.navigate(['../listInvouce'], { queryParams: { dateFrom: this.dateFrom, untilDate: this.untilDate } })
  else{
    this.router.navigate(['../listExpenses'], { queryParams: { dateFrom: this.dateFrom, untilDate: this.untilDate } })
  }
  }
}
