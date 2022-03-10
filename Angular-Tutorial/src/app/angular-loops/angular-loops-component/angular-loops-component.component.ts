import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-loops-component',
  templateUrl: './angular-loops-component.component.html',
  styleUrls: ['./angular-loops-component.component.css']
})
export class AngularLoopsComponentComponent {

  arrData = ['ganesha', 'shiv', 'bhole', 'mahadev', 'sankar']
  arrObj = [
    { name: 'ganesha', age: 29, email: 'xyz@gmail.com' },
    {
      name: 'shiv', age: 29, email: 'xyz@gmail.com'
    },
    { name: 'bhole', age: 29, email: 'xyz@gmail.com' },
    { name: 'mahadev', age: 29, },
    { name: 'sankar', age: 29, },
  ]
}
