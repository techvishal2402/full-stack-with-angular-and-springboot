import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>Todo Vishal </h1>',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo Vishal';
  message :string = 'My First message to the world'
}
