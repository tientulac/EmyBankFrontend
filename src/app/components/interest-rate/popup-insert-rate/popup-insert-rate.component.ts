import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-insert-rate',
  templateUrl: './popup-insert-rate.component.html',
  styleUrls: ['./popup-insert-rate.component.scss']
})
export class PopupInsertRateComponent implements OnInit {

  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() titleModal: string ;
  @Input() dataEdit: any ;

  AddForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    year: new FormControl(null, [Validators.required]),
    rate: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    if(this.dataEdit != null){
     this.AddForm.patchValue({
      name: !this.dataEdit ? '' :this.dataEdit.name,
      year: !this.dataEdit ? '' :this.dataEdit.year,
      rate: !this.dataEdit ? '' :this.dataEdit.rate,
      description: !this.dataEdit ? '' :this.dataEdit.description,
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
      name: this.AddForm.value.name,
      year: this.AddForm.value.year,
      rate: this.AddForm.value.rate,
      description: this.AddForm.value.description,
    }
    this.submitted = true;
    if (this.AddForm.invalid) {
      return false;
    }
    this.submit.emit(req)
  }
}
