import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-insert-account-type',
  templateUrl: './popup-insert-account-type.component.html',
  styleUrls: ['./popup-insert-account-type.component.scss']
})
export class PopupInsertAccountTypeComponent implements OnInit {

  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() titleModal: string ;
  @Input() dataEdit: any ;

  AddForm = new FormGroup({
    code: new FormControl(null,[Validators.required]),
    name: new FormControl(null, [Validators.required]),
  })
  
  ngOnInit(): void {
    if(this.dataEdit != null){
     this.AddForm.patchValue({
      code: !this.dataEdit ? '' :this.dataEdit.code,
      name: !this.dataEdit ? '' :this.dataEdit.name,
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
      code: this.AddForm.value.code,
      name: this.AddForm.value.name,
    }
    this.submitted = true;
    if (this.AddForm.invalid) {
      return false;
    }
    this.submit.emit(req)
  }
}
