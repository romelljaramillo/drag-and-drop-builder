import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemebuildComponent } from './themebuild.component';

const routes: Routes = [
  {
    path: '',
    component: ThemebuildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemebuildRoutingModule { }
