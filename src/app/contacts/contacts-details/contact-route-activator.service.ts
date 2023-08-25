import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ContactService } from '../shared/contacts.service';

@Injectable()
export class ContactRouteActivator implements CanActivate {
    constructor(private contactService : ContactService, private router : Router){

    }
    canActivate(route : ActivatedRouteSnapshot){

        const contactExists = !!this.contactService.getContact(+route.params['id'])
        if(!contactExists)
            this.router.navigate(['/404'])
        return contactExists
    }
}
