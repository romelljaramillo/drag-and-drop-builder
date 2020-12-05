import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

import { AdItem } from './aditems/ad-item';

@Component({
  selector: 'app-themebuild',
  templateUrl: './themebuild.component.html',
  styleUrls: ['./themebuild.component.css']
})
export class ThemebuildComponent implements OnInit {

  public dropItems: AdItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
