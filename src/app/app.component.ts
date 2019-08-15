import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;


onIncrementCounter(){
  if(this.counter !== 10){
  this.counter ++;
  }
}

onDecrementCounter(){
  if(this.counter !== 0){
  this.counter--;
  }
}
}