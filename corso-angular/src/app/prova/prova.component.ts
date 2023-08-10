import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, OnChanges{
  @Input() persone: any; // serve per importare persone dal componente padre

  constructor(){ }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit():void {
    console.log(this.persone);
  }
}
