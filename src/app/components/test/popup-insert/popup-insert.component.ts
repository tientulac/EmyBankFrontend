import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-insert',
  templateUrl: './popup-insert.component.html',
  styleUrls: ['./popup-insert.component.scss']
})
export class PopupInsertComponent implements OnInit {

  submitted = false;

  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() titleModal: string ;
  @Input() dataEdit: any ;

  AddForm = new FormGroup({
    shortName: new FormControl(null,[Validators.required]),
    nativeName: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    facility: new FormControl(null, [Validators.required]),
    member: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    director: new FormControl(null, [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
    if(this.dataEdit != null){
     this.AddForm.patchValue({
      shortName: !this.dataEdit ? '' :this.dataEdit.shortName,
      nativeName: !this.dataEdit ? '' :this.dataEdit.nativeName,
      image: !this.dataEdit ? '' :this.dataEdit.image,
      description: !this.dataEdit ? '' :this.dataEdit.description,
      facility: !this.dataEdit ? '' :this.dataEdit.facility,
      member: !this.dataEdit ? '' :this.dataEdit.member,
      phone: !this.dataEdit ? '' :this.dataEdit.phone,
      director: !this.dataEdit ? '' :this.dataEdit.director,
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
      shortName: this.AddForm.value.shortName,
      nativeName: this.AddForm.value.nativeName,
      image: this.AddForm.value.image,
      description: this.AddForm.value.description,
      facility: this.AddForm.value.facility,
      member: this.AddForm.value.member,
      phone: this.AddForm.value.phone,
      director: this.AddForm.value.director,
    }
    this.submitted = true;
    if (this.AddForm.invalid) {
      return false;
    }
    this.submit.emit(req)
  }
}
