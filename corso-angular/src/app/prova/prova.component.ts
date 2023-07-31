import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, 
AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{
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
