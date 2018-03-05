import { Component } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

   loginAnimate(){
    let elementForm = document.getElementById("loginForm");
    elementForm.classList.toggle("loginFormActive");

    let elementBody = document.getElementById("body");
    elementBody.classList.toggle("opacityBody");
   }

   ayudaAnimate(){
    let element = document.getElementById("help");
    element.classList.toggle("helpActive");

    let elementBody = document.getElementById("body");
    elementBody.classList.toggle("opacityBody");
 
  }


}
