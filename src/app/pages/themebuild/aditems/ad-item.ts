import { Type } from '@angular/core';
import { AdDataBlock } from './ad-Item-block';
import { AdComponent } from './ad.component';

export class AdItem {
  // constructor(public component: Type<any>, public data: any) {}

  constructor(public component: Type<AdComponent>, public data: AdDataBlock) {}
}