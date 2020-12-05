import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent {

  @Input() data: any;

  constructor() {
    console.log(this.data)
  }
}
