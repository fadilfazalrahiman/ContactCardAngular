import { Routes } from '@angular/router'
import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactsDetailComponent } from './contacts/contacts-details/contacts-detail.component';
import { CreateContactComponent } from './contacts/create-contact.component';
import { Error404Component } from './errors/404.component';
import { ContactRouteActivator } from './contacts/contacts-details/contact-route-activator.service';
import { ContactListResolver } from './contacts/contacts-list-resolver.service';

export const appRoutes : Routes = [  
    {path: 'contacts', component : ContactsListComponent, resolve : {contacts:ContactListResolver}},
    {path: 'contacts/new', component : CreateContactComponent, canDeactivate: ['canDeactivateCreateContact']} ,
    {path: 'contacts/:id', component : ContactsDetailComponent, canActivate:[ContactRouteActivator]},
    {path: '404', component : Error404Component},
    {path: '', redirectTo: '/contacts', pathMatch: 'full'}
]