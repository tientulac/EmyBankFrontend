import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-popup-loan',
  templateUrl: './popup-loan.component.html',
  styleUrls: ['./popup-loan.component.scss']
})
export class PopupLoanComponent implements OnInit {

  constructor(
    public toastr: ToastrService
  ) { }

  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() titleModal: string ;
  @Input() dataEdit: any ;
  @Input() dataRateInput: any ;
  @Input() accountIdInput: any ;

  valueLimit: number;

  AddForm = new FormGroup({
    object: new FormControl('',[Validators.required]),
    limit: new FormControl(null, [Validators.required]),
    rate_id: new FormControl('', [Validators.required]),
    purpose: new FormControl(null, [Validators.required]),
    formality: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    if(this.dataEdit != null){
     this.AddForm.patchValue({
      object: '' ,
      limit: '' ,
      rate_id: '' ,
      purpose: '' ,
      formality: '',
      amount: 0,
     });
    }
   }

  get checkvalue() {
    return this.AddForm.controls;
  }
  
  Dismiss(){
    this.close.emit()
  }

  onSubmit(){
    let req = {
      object: this.AddForm.value.object,
      limited: this.AddForm.value.limit,
      rate_id: this.AddForm.value.rate_id,
      purpose: this.AddForm.value.purpose,
      formality: this.AddForm.value.formality,
      amount: this.AddForm.value.amount,
      account_id: this.accountIdInput,
    }
    this.submitted = true;
    if (this.AddForm.invalid) {
      return false;
    }
    if (this.AddForm.value.amount > this.AddForm.value.limit) {
      this.toastr.warning("Your amount you input is greater than limit. Create loan failed !");
      return false;
    }
    this.submit.emit(req);
  }

  filterLimit(event) {
    switch (event) {
      case "Company":
        this.valueLimit = 200000;
        break;
      case "Customer":
        this.valueLimit = 60000;
        break;
      case "Personal":
        this.valueLimit = 50000;
        break;
    }
    this.AddForm.patchValue({
      limit: this.valueLimit
    });
  }
}
