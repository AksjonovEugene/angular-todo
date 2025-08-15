import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  isEdting?: boolean;
}

@Component({
  selector: 'app-todo-page',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss'
})
export class TodoPage {
  todoList: TodoItem [] = []
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {

      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.todoList.push(newTodoItem)
      this.newTask = ''
    }
  }

  toggleCompleted(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id)
    console.log(this.todoList);
  }

  toggleEdit(editTask: TodoItem) {
    if (editTask.isEdting) {
      editTask.task = editTask.task.trim()
    }
    editTask.isEdting = !editTask.isEdting;
  }
}
