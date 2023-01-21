import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataGridComponent } from './data-grid/data-grid.component';
import { HomeComponent } from './home/home.component';
import { TabFormComponent } from './tab-form/tab-form.component';


const routes: Routes = [
        { path: 'data-grid', component: DataGridComponent },
        { path: 'tab-form', component: TabFormComponent },
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   
 }