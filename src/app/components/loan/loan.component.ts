import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent extends BaseComponent implements OnInit {

  dataRate: any;
  dataLoan: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.InterestRateService.getList(this.Token).subscribe(
      (res) => {
        this.dataRate = res.Data;
      }
    );
    this.LoanService.getListByAccountId(this.com.getUserinfo().Info.user_id, this.Token).subscribe(
      (res) => {
        this.dataTable = res.Data;
        this.totalItem = this.dataTable ? this.dataTable.length : 0;
        this.totalItemFilter = this.dataTable ? this.dataTable.length : 0;
      }
    );
  }

  filterRate(rate_id) {
    let rate = this.dataRate.filter(x => x.id == rate_id).map(x => x.rate);
    return rate;
  }

  pageChange(event) {
    this.page = event
  }

  excel(){
    window.open("http://localhost:8080/api/v1/loan/excel");
  }
}
