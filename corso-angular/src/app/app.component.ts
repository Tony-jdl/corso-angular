import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';

  onInput(event:Event){
    /* console.log(event);
    console.log((<HTMLInputElement>event.target)); */
    console.log((<HTMLInputElement>event.target).value);
  }
}
