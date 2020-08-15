import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component'
import { AddcontactComponent } from './addcontact/addcontact.component'
import { CreatecontactsComponent } from './createcontacts.component';
import { ListcontactsComponent } from './listcontacts.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'edit/:name', component: EditComponent },
  { path: 'home', component: ListcontactsComponent },
  { path: 'add', component: AddcontactComponent },
  { path: 'detail/:name', component: ContactDetailComponent },
  { path: 'list', component: ListcontactsComponent },
  { path: 'create', component: CreatecontactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
