import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListcontactsComponent } from './listcontacts.component';
import { CreatecontactsComponent } from './createcontacts.component';
import { HttpModule } from '@angular/http';
import { ContactjsonService } from './contactjson.service';
import { FilterPipe } from './filter.pipe';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    HomeComponent,
    AddcontactComponent,
    ListcontactsComponent,
    CreatecontactsComponent,
    FilterPipe,
    ConfirmDialogComponent,
    LoginFormComponent,
  ],
  exports: [  
    ConfirmDialogComponent  
  ],imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ContactsService,ContactjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ConfirmDialogModule  
{  
} 
platformBrowserDynamic().bootstrapModule(AppModule)