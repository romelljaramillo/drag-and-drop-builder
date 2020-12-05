import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contendist',
  templateUrl: './contendist.component.html',
  styleUrls: ['./contendist.component.css']
})
export class ContendistComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log('content this component instanciado');
  }

}
