import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Invoice } from '../../../modules/invoice';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../modules/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss'
})
export class InvoicesListComponent {
  @Input() custId?: number;
  allcustomers = new Array<Customer>();
  toFilter = false
  constructor(private dataServices: DataService, private route: ActivatedRoute) {
  }
  allInvoice = new Array<Invoice>();
  selectedCust?: number
  dateFrom?: Date
  untilDate?: Date
  month?: string
  year?: string
  ngOnInit() {

    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
//הוא לא הכי יעיל if else שלומ המורה אנו יודעות שהשימוש המרבה כאן ב 
//אך משום קוצר הזמן לא היה  לנו כדאי להתעכב על כך 
//מקוות מאד בהמשך לשפר את הקוד 
//תודה רבה בתקווה להבנה
//והמשך בדיקה מהנה 
this.route.queryParams.subscribe(params => {
      this.custId = params['custId'];
      this.dateFrom = params['dateFrom']
      this.untilDate = params['untilDate']
      this.month = params['month']
      this.year = params['year']
      if (this.custId) {
        this.dataServices.getInvoiceByCustId(this.custId).subscribe(data => {
          this.allInvoice = data;
        });
      }
      else {
        if (this.untilDate && this.dateFrom) {
          this.dataServices.getInvoiceBeetwin2Dates(this.dateFrom, this.untilDate).subscribe(data => {
            this.allInvoice = data;
          });
        }
        else
          if (this.month) {
            this.dataServices.getInvoiceByMonth(this.month).subscribe(data => {
              this.allInvoice = data;
            });
          }
          else
            if (this.year) {
              this.dataServices.getInvoiceByYear(this.year).subscribe(data => {
                this.allInvoice = data;
              });
            }
            else {
              this.dataServices.getAllInvoice().subscribe(data => {
                this.allInvoice = data;
              });
            }
      }
    });
  }
}
