import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id : number,
    public descritption: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos=[

    new Todo(1, 'Learning Life', false, new Date()),
    new Todo(2, 'Learning  IT Architecture', false, new Date()),
    new Todo(3, 'Learning Angular', false, new Date()),
    new Todo(4, 'Learning Microservice', false, new Date())

  ];
  todo={
      id:"1",
      descritption:" Learning Life"
  }
  constructor() { }

  ngOnInit(): void {
}

}


