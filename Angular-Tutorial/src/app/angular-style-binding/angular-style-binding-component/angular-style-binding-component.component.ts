import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-style-binding-component',
  templateUrl: './angular-style-binding-component.component.html',
  styleUrls: ['./angular-style-binding-component.component.css']
})
export class AngularStyleBindingComponentComponent {

  color = "orange"
  err = false
  updateColor() {
    this.color = "pink"
  }
  oldColor() {
    this.color = "orange"
  }
}
