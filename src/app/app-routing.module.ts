import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskCreateComponent} from "./task/pages/task-create/task-create.component";
import {TaskTableComponent} from "./task/pages/task-table/task-table.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: TaskTableComponent },
  { path: 'create-task', component: TaskCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
