import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CONTACTS } from '../contact-data';
import {Contacts} from '../contacts'

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
arrContact: Contacts[]=[];
  constructor() { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    console.log(form.value);
    CONTACTS.push(form.value);
    console.log(CONTACTS);
    this.arrContact.push(form.value);
    console.log(this.arrContact)


    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

}
