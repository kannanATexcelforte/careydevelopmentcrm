import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoOneComponent } from './compo-one/compo-one.component';

const routes: Routes = [
  { path: '', component: CompoOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
