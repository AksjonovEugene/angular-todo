import { Routes } from '@angular/router';
import {TodoPage} from "./pages/todo-page/todo-page";
import {Archive} from "./pages/archive/archive";

export const routes: Routes = [
    {path: '', component: TodoPage},
    {path: 'archive', component: Archive}
];
