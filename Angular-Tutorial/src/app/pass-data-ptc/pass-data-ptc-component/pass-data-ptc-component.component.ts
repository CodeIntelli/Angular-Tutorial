import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-data-ptc-component',
  templateUrl: './pass-data-ptc-component.component.html',
  styleUrls: ['./pass-data-ptc-component.component.css']
})
export class PassDataPtcComponentComponent {

  data = "shiva mahadev bholenath"
  objData = {
    data1: 'name',
    data2: 'age',
    data3: 'anyone'
  }
}
