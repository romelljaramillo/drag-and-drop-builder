import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuModule } from './menu/menu.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    TemplateComponent,
    LayoutComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    TemplateComponent,
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    MenuModule
  ]
})
export class TemplateModule { }
