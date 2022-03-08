import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binging-component',
  templateUrl: './property-binging-component.component.html',
  styleUrls: ['./property-binging-component.component.css']
})
export class PropertyBingingComponentComponent {
  name = "shiva"
  disabledBox = true
  enableBox() {
    this.disabledBox = false
  }
}
