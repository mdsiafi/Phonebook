import { Component, OnInit } from '@angular/core';
import { Contacts } from './contacts';
import { ContactjsonService } from './contactjson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {
  private route: ActivatedRoute;
  contact: Contacts[];
  httpClient: any;
  notifyDelete: any;
  constructor(private contactsService: ContactjsonService) {  }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts() {
    this.contactsService.getContactjson().subscribe((data: Contacts[]) => {
      this.contact = data;
    });
  }

  deleteEmployee(id: number) {
   // const name: string = "Carter Henry";
    this.contactsService.deleteEmployee(`${id}`).subscribe(
      () => console.log(`Contact with id = ${id} Deleted`),
      (err) => console.log(err)
    );
    window.location.reload();
  }
  showDialog(id: number) {  
    this.contactsService.confirmThis("Are you sure to delete?", function () {  
      alert("Yes clicked");  
    }, function () {  
      alert("No clicked");  
    })  
  } 

}
