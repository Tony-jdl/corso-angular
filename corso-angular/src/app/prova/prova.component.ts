import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{
  @Output() mandaDatiEvento = new EventEmitter<string>()

  nome = 'Luca';

  constructor(){ }

    ngOnInit():void {
  }

  mandaDati() {
    this.mandaDatiEvento.emit(this.nome);
  }
}
