import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{

  isDisabled = true;
  immagine = "";
  immagine1 = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  immagine2 = "";

  constructor(){
    console.log("costruttore");
  }
  ngOnInit(){
    console.log("ngOnInit")
    let counter = 0;
    setInterval(()=>{
      (counter%2 == 0) ? (this.immagine = this.immagine1) : (this.immagine = this.immagine2);
      counter++;
    }, 1000)
  }
}
