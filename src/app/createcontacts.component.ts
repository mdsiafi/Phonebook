import { Component, OnInit } from '@angular/core';
import {Http , Response ,Headers} from '@angular/http';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-createcontacts',
  templateUrl: './createcontacts.component.html',
  styleUrls: ['./createcontacts.component.css']
})
export class CreatecontactsComponent implements OnInit {
  httpClient: any;
  //router: Router;
  constructor(public http: Http,private router: Router) {
    
    console.log('Hello RestServiceProvider Provider');
  }
  contactObj: object={
    "id":1,
    "name":"abcd",
    "mobilenumber":"abcdegh"
  };
  addNewContact(form: NgForm) {
    this.contactObj=form.value;
    this.http.post("http://localhost:3000/Contacts/",form.value).subscribe((res:Response) =>{
    });
    this.router.navigate(["/home"]);
    }

   ngOnInit() {
    } 
}
