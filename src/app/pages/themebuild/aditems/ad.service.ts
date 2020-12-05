import { Injectable } from '@angular/core';

import { MasonryComponent } from '../../../block/masonry/masonry.component';
import { ContendistComponent } from '../../../block/contendist/contendist.component';
import { AdItem } from './ad-item';

import { AdItemBlock } from './ad-Item-block';

export const items_build: AdItemBlock[] = [
  { component: MasonryComponent, data: { name: 'masonry', img: 's_masonry_block.svg' } },
  { component:  ContendistComponent, data: { name: 'Bombasto', img: 's_masonry_block.svg' } }
];


@Injectable()
export class AdService {
  arrayItems: any[] = [];
  
  getAds() {
    items_build.forEach(item => {
      this.arrayItems.push(new AdItem(item.component, item.data));
    });

    return this.arrayItems;
    // return [
    //   new AdItem(MasonryComponent, {name: 'Bombasto', img: 's_masonry_block.svg'}),
    //   new AdItem(ContendistComponent, {name: 'Hola', img: 's_masonry_block.svg'}),
    // ];
  }
}