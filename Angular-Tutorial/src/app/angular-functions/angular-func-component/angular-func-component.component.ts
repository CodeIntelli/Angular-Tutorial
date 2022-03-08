import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-func-component',
  templateUrl: './angular-func-component.component.html',
  styleUrls: ['./angular-func-component.component.css']
})
export class AngularFuncComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getName()
    // this.getDynName('shiv')
  }
  getName() {
    alert('Shiva')

  }
  getDynName(name: string) {
    alert(name)
  }
}
