import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-data-ctp-component',
  templateUrl: './pass-data-ctp-component.component.html',
  styleUrls: ['./pass-data-ctp-component.component.css']
})
export class PassDataCtpComponentComponent {
  name = ""
  parentComponent(data: any) {
    console.warn(data)
    this.name = data.name
  }
}
