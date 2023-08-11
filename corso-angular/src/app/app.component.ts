import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';
  counter = true;
  persone = [
    {nome: "Luca", cognome: "Rossi", online: true, color: "blue"},
    {nome: "Marco", cognome: "Verdi", online: false, color: "red"},
    {nome: "Anna", cognome: "Neri", online: true, color: "green"},
  ];

  riceviDati(value: string){
    console.log(value);
  }
}
