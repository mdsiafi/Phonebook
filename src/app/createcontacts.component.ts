import { Component, OnInit } from '@angular/core';
import {Http , Response ,Headers} from '@angular/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-createcontacts',
  templateUrl: './createcontacts.component.html',
  styleUrls: ['./createcontacts.component.css']
})
export class CreatecontactsComponent implements OnInit {
  httpClient: any;

  constructor(public http: Http) {
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
    }

   ngOnInit() {
    } 
}
