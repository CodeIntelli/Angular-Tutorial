import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes-component',
  templateUrl: './angular-pipes-component.component.html',
  styleUrls: ['./angular-pipes-component.component.css']
})
export class AngularPipesComponentComponent implements OnInit {

  name = "shiva ganesha"
  today = Date.now()
  str = "Hello Angular"
  val = 10
  constructor() { }

  ngOnInit(): void {
  }

}
