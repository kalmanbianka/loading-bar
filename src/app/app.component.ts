import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number[] = [];


onIncrementCounter(){
  if(this.counter.length !== 10){
  this.counter.push(1);
  }
}

onDecrementCounter(){
  if(this.counter.length !== 0){
  this.counter.pop();
  }
}
}