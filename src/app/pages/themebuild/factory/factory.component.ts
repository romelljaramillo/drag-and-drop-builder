import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { AdDirective } from '../aditems/ad.directive';
import { AdItem } from '../aditems/ad-item';
import { AdComponent } from '../aditems/ad.component';

@Component({
  selector: 'app-factory',
  template: `<ng-template adHost></ng-template>`,
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  @Input()
  ads!: AdItem;
  @ViewChild(AdDirective, { static: true })
  adHost!: AdDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = this.ads.data;
  }

}
