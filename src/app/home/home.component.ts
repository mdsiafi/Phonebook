import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }
contacts: Contacts[] = this.contactsService.getContacts();
  ngOnInit() {
    
  }

}
