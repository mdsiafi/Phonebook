import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Contacts } from '../contacts';
import { ContactsService } from '../contacts.service';
import { ContactjsonService } from '../contactjson.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  // contacts: Contacts;
 contact : Contacts[]=[]; 
 //contact: Contacts={"id":"id","name":"name","mobilenumber":"mobilenumber"};
    constructor(    
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private contactjsonService: ContactjsonService,
    private location: Location
    ) {}

  ngOnInit() : void{
    this.getContacts();
  }
  getContacts(): void {
   // const name: string = this.route.snapshot.paramMap.get('name');
    const id: string = this.route.snapshot.paramMap.get('name');

    // this.contact = this.contactjsonService.getContactByName(name);
    // console.log(this.contact);
    // // this.contact.push();
    // this.contactjsonService.getContactByName(name).subscribe(res => {
    //   this.contact = res;
    // });
    this.contactjsonService.getContactById(id).subscribe(res => {
      this.contact = res;
    });
}

    goBack(): void {
        this.location.back();
    }
}
