import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-simple-forms-component',
  templateUrl: './angular-simple-forms-component.component.html',
  styleUrls: ['./angular-simple-forms-component.component.css']
})
export class AngularSimpleFormsComponentComponent {

  getUserValue(value: any) {
    console.log(value)
  }

}
