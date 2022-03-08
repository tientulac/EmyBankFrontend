import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent extends BaseComponent implements OnInit {

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.AccountTypeService.getList(this.Token).subscribe(res => {
      if (res) {
        this.dataTable = res.Data;
        this.spinner.hide();
        this.totalItem = res.Data ? res.Data.length : 0;
        this.totalItemFilter = res.Data ? res.Data.length : 0;
      }
      else
      {
        this.toastr.warning(res.Message);
        this.spinner.hide();
      }
    }, (err) => {
      this.toastr.error(err.message);
        this.spinner.hide();
    })
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
      case "Add":
        this.checkInsert = true;
        this.titleModal = "Add new";
        break;
      case "Update":
        this.titleModal = "Edit";
        this.checkInsert = false;
        this.selected_ID = Data.id;
        break;
      case "Delete":
        this.selected_ID = Data.id;
        break;
    }
  }

  deleteItem() {
    this.spinner.show();
    this.AccountTypeService.delete(this.selected_ID, this.Token).subscribe(res => {
      if (res.Status == 1) {
        this.toastr.success(res.Message);
        this.modalService.dismissAll('');
        this.getData();
        this.spinner.hide();
      } else {
        this.toastr.warning(res.Message);
        this.spinner.hide();
      }
    })
  }

  submitEvent(event) {
    event = {
      ...event,
      id: this.selected_ID
    }
    this.spinner.show();
    if (this.checkInsert) {
      this.AccountTypeService.insert(event, this.Token).subscribe(
        (res) => {
          if (res.Status == 1) {
            this.toastr.success(res.Message);
            this.getData();
            this.modalService.dismissAll('');
            this.spinner.hide();
          }
          else {
            this.toastr.warning(res.Message);
            this.spinner.hide();
        }
      })
    }
    else {
      this.AccountTypeService.update(event, this.Token).subscribe(
        (res) => {
          if (res.Status == 1) {
            this.toastr.success(res.Message);
            this.getData();
            this.modalService.dismissAll('');
            this.spinner.hide();
          }
          else {
            this.toastr.warning(res.Message);
            this.spinner.hide();
          }
        })
      }
    }
}
