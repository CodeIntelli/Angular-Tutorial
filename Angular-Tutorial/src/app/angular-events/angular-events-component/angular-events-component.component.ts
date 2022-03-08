import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-events-component',
  templateUrl: './angular-events-component.component.html',
  styleUrls: ['./angular-events-component.component.css']
})
export class AngularEventsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.myEvent('evt')
  }
  myEvent(evt:any){
    console.log(evt)
  }
}
