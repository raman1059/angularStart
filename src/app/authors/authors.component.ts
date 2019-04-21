import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  //templateUrl: './authors.component.html',
  //styleUrls: ['./authors.component.css'],
  //template:`
  //<button class="btn btn-primary" [class.active]="isActive">Save</button>  
  //`
 //template:`
 //<button [style.backgroundColor]="isActive ? 'blue : 'white'">Save</button>     //Style Binding.
 //`
 //template:`
 //      <div (click)="onDivClicked()">                                           //Bubbling Evemt.
 //        <button (click)="onSave($event)">Save</button>
 //      </div>  
 //`
 //template:`
 //<input #joVlikhya (keyup.enter)="onKeyUp1(joVlikhya.value)" />
 //`
 //template:`
 //<input [(ngModel)]="email" (keyUp.enter)="onKeyUp()" />
 //`
 //template:`
 //{{ course.title | uppercase| lowercase }} <br/>
// {{ course.students | number  }} <br/>
// {{ course.rating | number:'3.1-1'}} <br/>
// {{ course.price | currency:'INR':true:'3.2-2' }} <br/>
// {{ course.releaseDate | date:'fullDate'  }} <br/>
 //`
 template:`
 {{ text | summary:10 }}
 `
})
export class AuthorsComponent implements OnInit {

  text = `
  Angular (commonly referred to as "Angular 2+" or "Angular v2 and above")[4][5] is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
  `


course = {
  title: "The Complete Angular Course",
  students: 443546,
  rating: 3.36343,
  price: 190.543,
  releaseDate: new Date(2016, 3, 1)
}



email = "me@example.com";

oneKetUp(){
  console.log(this.email);
}


  onKeyUp1(joVlikhya){
       console.log(joVlikhya)
  }
  isActive = true;  //class binding at line 9.
  onDivClicked(){
    console.log("Div was clicked");
  }
  onSave($event) {
    $event.stopPropagation();     //To stop event Bubbling.
    console.log("Button was Clicked",$event);
  }
  authors;

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
      
   }

  ngOnInit() {
  }

}
