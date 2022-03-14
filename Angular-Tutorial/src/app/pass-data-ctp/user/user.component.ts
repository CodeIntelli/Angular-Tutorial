import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  item = {
    name: 'shiva', age: 43
  }

  ngOnInit(): void {
  }
  sendData() {
    this.parentComponent.emit(this.item)

  }

}
