import { Component, OnInit } from '@angular/core';
import { ContactjsonService } from '../contactjson.service'; 

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
message: any;
  constructor(
    private contactjsonService: ContactjsonService 
  ) { }

  ngOnInit() {
      //this function waits for a message from alert service, it gets   
        //triggered when we call this from any other component  
        this.contactjsonService.getMessage().subscribe(message => {  
          this.message = message;  
      });  
  }

}
