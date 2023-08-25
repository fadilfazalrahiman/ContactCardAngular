import { Component } from "@angular/core";
import  { ContactService } from '../shared/contacts.service';
import { ActivatedRoute , Params} from '@angular/router';
import { IContact } from '../shared/index';

@Component({
    templateUrl: './contacts-detail.component.html' ,
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .contact-image {height: 100px;}
        a {cursor:pointer}
    `]


})
export class ContactsDetailComponent {

    contact: IContact 
    addMode: boolean
    constructor(private contactService: ContactService , private route: ActivatedRoute) {
    }
    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            this.contact = this.contactService.getContact(+params['id'])
            this.addMode = false;
        })
    }

}