import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/themebuild',
    pathMatch: 'full'
  },
  {
    path: 'themebuild',
    loadChildren: () => import('./pages/themebuild/themebuild.module').then(m => m.ThemebuildModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
