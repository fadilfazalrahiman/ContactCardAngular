import { Component, OnInit } from '@angular/core';
import { ContactService } from './shared/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { IContact } from './shared/index';

declare let toastr;

@Component({
  selector: 'contacts-list',
  template : `<div>
  <h1>Contact Details</h1>
  <hr/>
  <div class="row">
    <div *ngFor="let contact of contacts" class="col-md-5">
    <contact-thumbnail  [contact]="contact"></contact-thumbnail>
    </div>
    </div>
  </div>`,
})

export class ContactsListComponent implements OnInit {
contacts:IContact[];
  constructor(private contactService: ContactService, private route:ActivatedRoute) {

    //this.contacts = this.contactService.getContacts();

  }
  ngOnInit() {
    this.contacts = this.route.snapshot.data['contacts'];
  }
  
}