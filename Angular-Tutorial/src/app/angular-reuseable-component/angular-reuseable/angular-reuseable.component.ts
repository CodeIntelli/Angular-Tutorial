import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-reuseable',
  templateUrl: './angular-reuseable.component.html',
  styleUrls: ['./angular-reuseable.component.css']
})
export class AngularReuseableComponent {
  dataObject = [
    { name: 'hello', age: '62', location: 'jnd' },
    { name: 'hii', age: '52', location: 'jnd' },
    { name: 'how', age: '42', location: 'jnd' },
    { name: 'are', age: '32', location: 'jnd' },
    { name: 'you', age: '22', location: 'jnd' },
  ]


}
