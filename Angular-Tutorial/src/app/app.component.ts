import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ganesha';
  name='Shiva';
  data = ['Ganesha','Parvati','Shiva','Kartik'];
  getData(){
    return this.data;
  }
  god = {
    Death:'Shiva',
    love:'Krishna',
    Education:'Bramha'
  }
}
