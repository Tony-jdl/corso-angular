import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';
  persone = [
    {nome: "Luca", cognome: "Rossi", online: true, color: "blue"},
    {nome: "Marco", cognome: "Verdi", online: false, color: "red"},
    {nome: "Anna", cognome: "Neri", online: true, color: "green"},
  ];

  onClick(){
    this.persone = [
      {nome: "Ugo", cognome: "Bianchi", online: true, color: "blue"},
      {nome: "Maria", cognome: "Gialli", online: false, color: "blue"},
      {nome: "Andrea", cognome: "Verdi", online: true, color: "pink"},
    ];
  }
}
