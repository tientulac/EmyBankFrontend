import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends BaseComponent implements OnInit {

  dataAccount: any = [];
  accountTypeName: string;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.AccService.FindById(this.com.getUserinfo().Info.user_id).subscribe(
      (res) => {
        this.dataAccount = res.data;
        this.totalItem = this.dataAccount ? this.dataAccount.length : 0;
        this.totalItemFilter = this.dataAccount ? this.dataAccount.length : 0;
      }
    );
    this.InterestRateService.getList(this.Token).subscribe(
      (res) => {
        this.dataRate = res.Data;
      }
    );
    this.accountTypeName = this.com.getUserinfo().Info.accountType_name;
    this.spinner.hide();
  }

   
  pageChange(event) {
    this.page = event
  }

  open(content, sizm, type, Data) {
    this.record = Data == '' ? null : Data
    this.selected_ID = Data.id;
    this.submitted = false;
    this.modalServiceOpen(content, sizm);
    switch (type) {
      case "Loan":
        this.titleModal = "Create loan";
        break;
      case "Transaction":
        this.titleModal = "Create transaction";
        break;
    }
  }

  submitEventLoan(event) {
    event = {
      ...event,
    }
    this.spinner.show();
    this.LoanService.insert(event, this.Token).subscribe(
      (res) => {
        if (res.Status == 1) {
          this.toastr.success(res.Message);
          this.spinner.hide();
          this.getData();
          this.modalService.dismissAll('');
        }
        else {
          this.toastr.warning(res.Message);
          this.spinner.hide();
        }
      }
    );
  }

  submitEventTransaction(event) {
    event = {
      ...event,
    }
    this.spinner.show();
    this.TransactionService.deposite(event, this.Token).subscribe(
      (res) => {
        if (res.Status == 1) {
          this.toastr.success(res.Message);
          this.spinner.hide();
          this.getData();
          this.modalService.dismissAll('');
        }
        else {
          this.toastr.warning(res.Message);
          this.spinner.hide();
        }
      }
    );
  }
}
