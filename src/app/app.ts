import {Component} from '@angular/core';
import {TodoPage} from "./pages/todo-page/todo-page";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [
    TodoPage,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


}
