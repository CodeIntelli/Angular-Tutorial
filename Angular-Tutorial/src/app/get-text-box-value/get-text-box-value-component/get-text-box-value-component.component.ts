import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-text-box-value-component',
  templateUrl: './get-text-box-value-component.component.html',
  styleUrls: ['./get-text-box-value-component.component.css']
})
export class GetTextBoxValueComponentComponent {
  currentVal = ""
  getVal(data: any) {
    // console.log(data)
    this.currentVal = data
  }
}
