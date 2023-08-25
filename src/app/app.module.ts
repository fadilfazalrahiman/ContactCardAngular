import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{

  ContactsListComponent,
  ContactThumbnailComponent,
  ContactService,
  ContactsDetailComponent,
  CreateContactComponent,
  ContactRouteActivator,
  ContactListResolver
}from './contacts/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactThumbnailComponent,
    ContactsDetailComponent,
    NavBarComponent,
    CreateContactComponent,
    Error404Component, 
    ],
  providers: [
    ContactService, 
    ContactRouteActivator,
    ContactListResolver,
    {provide: 'canDeactivateCreateContact', useValue: checkDirtyState}
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateContactComponent){
  
  if(component.isDirty)
    return window.confirm('You have not saved this contact, do you really want to cancel?') 
  return true
}