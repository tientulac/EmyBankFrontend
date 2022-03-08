import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.scss']
})
export class PopupDeleteComponent implements OnInit {

  constructor() { }
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  Delete(){
    this.delete.emit()
  }
  
  Dismiss(){
    this.close.emit()
  }
}
