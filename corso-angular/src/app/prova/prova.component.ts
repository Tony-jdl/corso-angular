import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, 
AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{

  cani =[
    {
      nome: "cane 1",
      razza: "razza 1",
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      nome: "cane 2",
      razza: "razza 2",
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    }
  ] 

  constructor(){
    console.log("costruttore");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngOnInit(){
    console.log("ngOnInit")
  }
}
