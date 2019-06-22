import { Component } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent  {

  newTodo: string;
  todos: any;
  todoObj: any;
  id: number; name: string; hobby: string;

  constructor() {

    this.todos = [
      { id: 1, name: 'Parul', hobby: "Watching Anime." },
      { id: 2, name: 'Nohara', hobby: " I love sleeping." },
      { id: 3, name: 'Rocky', hobby: "Barking on people is my favourite thing." }
    ]
  }

  addTodo(event) {
    if (this.id) {
      this.todoObj = {
        id: this.id,
        name: this.name,
        hobby: this.hobby
      }
      this.todos.push(this.todoObj);
      //console.log(this.todos);

    }
  }

  remove(index) {
    this.todos.splice(index, 1);
  }

  edit(index) {
    console.log(index);
    var list = this.todos.find(i => i.id === index);

    this.id = list.id;
    this.name = list.name;
    this.hobby = list.hobby;

   // this.todos.push(this.todoObj);
   // console.log(this.todos);
  }  

}
