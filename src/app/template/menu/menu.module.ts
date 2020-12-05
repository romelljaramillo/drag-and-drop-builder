import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdService } from '../../pages/themebuild/aditems/ad.service';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [DragDropModule, MenuComponent],
  providers: [AdService],
})
export class MenuModule { }
