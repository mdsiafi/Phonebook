import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { Observable } from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError'; 
import { Subject } from 'rxjs/Subject';  

@Injectable({
  providedIn: 'root'
})
export class ContactjsonService {

  private subject = new Subject<any>();  
  API_URL = 'http://localhost:3000';
  BASE_URL = 'http://localhost:3000/Contacts';
  serchParm ="Irfan";
  handleError: any;
  constructor(private httpClient: HttpClient) { }
  getContactjson() {
    return this.httpClient.get(`${this.API_URL}/Contacts`);
}
getContactByName(name): Observable<Contacts[]>{
  return this.httpClient.get<Contacts[]>("http://localhost:3000/Contacts?name="+name);
}
getContactById(id): Observable<Contacts[]>{
  return this.httpClient.get<Contacts[]>("http://localhost:3000/Contacts?id="+id);
}

deleteEmployee(id: String): Observable<void> {
  return this.httpClient.delete<void>(`${this.BASE_URL}/${id}`);
}
confirmThis(message: string, siFn: () => void, noFn: () => void) {  
  this.setConfirmation(message, siFn, noFn);  
}

setConfirmation(message: string, siFn: () => void, noFn: () => void) {  
  let that = this;  
  this.subject.next({  
      type: "confirm",  
      text: message,  
      siFn:  
          function () {  
              that.subject.next(); //this will close the modal  
              siFn();  
          },  
      noFn: function () {  
          that.subject.next();  
          noFn();  
      }  
  });  

}  
getMessage(): Observable<any> {  
  return this.subject.asObservable();  
} 

}
