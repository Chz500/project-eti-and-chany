import { Component, Input } from '@angular/core';
import { Invoice } from '../../modules/invoice';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../modules/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-segmentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-segmentation.component.html',
  styleUrl: './data-segmentation.component.scss'
})
export class DataSegmentationComponent {
  @Input() custId?: number;
  allcustomers = new Array<Customer>();
  toFilter = false
  constructor(private dataServices: DataService,private route: ActivatedRoute) {
  }
  allInvoice = new Array<Invoice>();
  selectedCust?: number
  dateFrom?:Date
  untilDate?:Date
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.custId = params['custId'];
      this.dateFrom = params['dateFrom']
      this.untilDate = params['untilDate']
    });

    this.dataServices.getAllCustomers().subscribe(data => {
      this.allcustomers = data;
    });
    if (this.custId) {
      this.dataServices.getInvoiceByCustId(this.custId).subscribe(data => {
        this.allInvoice = data;
      });
    }
    else {
      if(this.untilDate&&this.dateFrom){
        this.dataServices.getInvoiceBeetwin2Dates(this.dateFrom,this.untilDate).subscribe(data => {
          this.allInvoice = data;
          console.log(this.untilDate);
          
        });
      }
      else
      this.dataServices.getAllInvoice().subscribe(data => {
        this.allInvoice = data;
      });
    }
  }
  getByUserId(custId: number) {
    this.dataServices.getInvoiceByCustId(custId).subscribe(data => {
      this.allInvoice = data;
    });
  }
  filter(){
    this.toFilter=true
  }
}
