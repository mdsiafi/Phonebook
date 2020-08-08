import { Injectable } from '@angular/core';
import { Contacts } from './contacts';
import { CONTACTS } from './contact-data';
 
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getContacts(): Contacts[] {
    return CONTACTS;
  }
  getContactName(name: string): Contacts {
    return CONTACTS.find(contacts => contacts.name === name);
  }
  getContactNumber(mobilenumber: string): Contacts {
    return CONTACTS.find(contacts => contacts.mobilenumber === mobilenumber);
  } 
}
