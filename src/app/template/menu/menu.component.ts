import { Component, Input, OnInit } from '@angular/core';
import { AdService } from '../../pages/themebuild/aditems/ad.service';
import { AdItem } from '../../pages/themebuild/aditems/ad-item';

@Component({
  selector: 'template-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {
  public adItems: AdItem[] = [];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit() {
    this.adItems = this.adService.getAds();
  }
}
