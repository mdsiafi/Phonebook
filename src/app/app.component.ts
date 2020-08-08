import { Component, OnInit } from '@angular/core';
 
import { Contacts } from './contacts';
import { ContactsService } from './contacts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactInformation';
  constructor(private contactsService: ContactsService) { }
  contacts: Contacts[] = this.contactsService.getContacts();
}
