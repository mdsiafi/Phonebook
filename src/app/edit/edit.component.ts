import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Contacts } from '../contacts';
import { ContactsService } from '../contacts.service';
import { ContactjsonService } from '../contactjson.service';
import {Http , Response ,Headers} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // contacts: Contacts;
  contact : Contacts[]=[];
  contactNew : Contacts[] = []; 
  updatedContact : Contacts[] = [];
  contactTo : Contacts[] = [];
  id : String;
  //contact: Contacts={"id":"id","name":"name","mobilenumber":"mobilenumber"};
     constructor( public http: Http,private router: Router,   
     private route: ActivatedRoute,
     private contactsService: ContactsService,
     private contactjsonService: ContactjsonService,
     private location: Location
     ) {}
 
   ngOnInit() : void{
     this.getContacts();
     this.getContact();
   }
   getContacts(): void {
    // const name: string = this.route.snapshot.paramMap.get('name');
     this.id = this.route.snapshot.paramMap.get('name');
 
     // this.contact = this.contactjsonService.getContactByName(name);
     // console.log(this.contact);
     // // this.contact.push();
     // this.contactjsonService.getContactByName(name).subscribe(res => {
     //   this.contact = res;
     // });
     this.contactjsonService.getContactById(this.id).subscribe(res => {
       this.contact = res;
     });
 }
 contactObj: object={
  "id":1,
  "name":"abcd",
  "mobilenumber":"abcdegh",
  "email": "gmail",
  "relation":"fee"
};
dataString : String ;

 addNewContact(form: NgForm) {
   this.contactObj = form.value;
  //  form.value.subscribe((data: Contacts[]) => {
  //  // this.contactNew = contactObj;
  // });
  console.log(form.value);
  // if(this.contactNew.name == "1"){

  // }
  //post new records
  this.http.post("http://localhost:3000/Contacts/",form.value).subscribe((res:Response) =>{
  });
 // window.location.reload();
  //copy all records
  // this.contactjsonService.getContactjson().subscribe((data: Contacts[]) => {
  //   this.contactNew = data;
  // });
  let last:any = this.contactNew[this.contactNew.length-1];
  //get last records
  this.contactjsonService.getContactById(last.id).subscribe(res => {
    this.updatedContact = res;
  });
  this.id = this.route.snapshot.paramMap.get('name');

  this.contactjsonService.getContactById(this.id).subscribe(res => {
    this.contactTo = res;
  });
  if(this.updatedContact[0].id == ""){
    this.updatedContact[0].id= this.contactTo[0].id;
  } 
  if(this.updatedContact[0].name == ""){
    this.updatedContact[0].name = this.contactTo[0].name;
  } 
  if(this.updatedContact[0].email == ""){
    this.updatedContact[0].email = this.contactTo[0].email;
  } 
  if(this.updatedContact[0].relation == ""){
    this.updatedContact[0].relation = this.contactTo[0].relation;
  }
  
  this.dataString = "{".concat("id:",this.updatedContact[0].id,",name:",this.updatedContact[0].name,",mobilenumber:",this.updatedContact[0].mobilenumber,",email:",this.updatedContact[0].email,",relation:",this.updatedContact[0].relation,"}");
  console.log(this.dataString);
  this.http.post("http://localhost:3000/Contacts/",this.dataString).subscribe((res:Response) =>{
  });
  this.router.navigate(["/home"]);
  }
 
     goBack(): void {
         this.location.back();
     }
     public getContact() {
      this.contactjsonService.getContactjson().subscribe((data: Contacts[]) => {
        this.contactNew = data;
      });
    }
    
}
