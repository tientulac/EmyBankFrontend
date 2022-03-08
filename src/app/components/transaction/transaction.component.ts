import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent extends BaseComponent implements OnInit {

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.TransactionService.getListByAccountId(this.com.getUserinfo().Info.user_id, this.Token).subscribe(
      (res) => {
        console.log(res);
        this.dataTable = res.Data;
        this.totalItem = this.dataTable ? this.dataTable.length : 0;
        this.totalItemFilter = this.dataTable ? this.dataTable.length : 0;
      }
    );
  }

  pageChange(event) {
    this.page = event
  }

  excel(){
    window.open("http://localhost:8080/api/v1/transaction/excel");
  }
}
