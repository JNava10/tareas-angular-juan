import { Routes } from '@angular/router';
import {TaskListComponent} from "./components/task-list/task-list.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'task-list', component: TaskListComponent },
  { path: 'home', component: HomeComponent },
];
