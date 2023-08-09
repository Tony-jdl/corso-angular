import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';
  input="";
  isVisible = true;
  persone = [
    {nome: "Luca", cognome: "Rossi", online: true},
    {nome: "Marco", cognome: "Verdi", online: false},
    {nome: "Anna", cognome: "Neri", online: true},
  ]

  onInput(event:Event){
    this.input = (<HTMLInputElement>event.target).value;
  }

  onClick(event:Event){
    this.title = this.input;
  }
}
