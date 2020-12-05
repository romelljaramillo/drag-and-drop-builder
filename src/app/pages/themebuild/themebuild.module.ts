import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ThemebuildComponent } from './themebuild.component';
import { ThemebuildRoutingModule } from './themebuild-routing.module';

import { AdDirective } from './aditems/ad.directive';
import { MasonryComponent } from '../../block/masonry/masonry.component';
import { ContendistComponent } from '../../block/contendist/contendist.component';
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  declarations: [
    ThemebuildComponent,
    FactoryComponent, 
    AdDirective,
    MasonryComponent,
    ContendistComponent
  ],
  entryComponents: [
    MasonryComponent,
    ContendistComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ThemebuildRoutingModule
  ],
  exports: [
    DragDropModule, 
    FactoryComponent
  ]
})
export class ThemebuildModule { }
