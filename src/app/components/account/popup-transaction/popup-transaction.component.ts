import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccService } from 'src/app/utils/services/acc.service';

@Component({
  selector: 'app-popup-transaction',
  templateUrl: './popup-transaction.component.html',
  styleUrls: ['./popup-transaction.component.scss']
})
export class PopupTransactionComponent implements OnInit {

  constructor(
    public toastr: ToastrService,
    public AccService: AccService
  ) { }

  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() titleModal: string ;
  @Input() dataEdit: any ;
  @Input() accountIdInput: any ;

  _code = new Date().getTime();

  valueLimit: number;
  dataAccount: any;

  AddForm = new FormGroup({
    code: new FormControl(this._code,[Validators.required]),
    message: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    from_account: new FormControl(null, [Validators.required]),
    to_account: new FormControl(null, [Validators.required]),
  })
  
  ngOnInit(): void {
    if(this.dataEdit != null){
     this.AddForm.patchValue({
      message: '' ,
      name: '' ,
      amount: 0 ,
      from_account: this.accountIdInput,
      to_account: '',
     });
    }
    this.getListAccount();
  }

  Dismiss(){
    this.close.emit();
  }

  getListAccount() {
    this.AccService.FindAll().subscribe(
      (res) => {
        this.dataAccount = res.Data;
      }
    );
  }

  get checkvalue() {
    return this.AddForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    var arrayAccountName = this.dataAccount.map(x => x.userName);
    let req = {
      code: this.AddForm.value.code,
      message: this.AddForm.value.message,
      name: this.AddForm.value.name,
      amount: this.AddForm.value.amount,
      from_account: this.accountIdInput,
      to_account: this.AddForm.value.to_account,
    }
    if (this.AddForm.value.amount > 50000) {
      this.toastr.warning("Your amount you input is greater than 5000$. Create transaction failed !");
      return false;
    }
    if (!arrayAccountName.includes(this.AddForm.value.to_account)) {
      this.toastr.warning("Account name is not exist !");
      return false;
    }
    if (this.AddForm.invalid) {
      return false;
    }
    this.submit.emit(req);
  }
}
