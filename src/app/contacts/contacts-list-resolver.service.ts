import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import { ContactService } from './shared/contacts.service';
import { map } from 'rxjs/operators';
@Injectable()
export class ContactListResolver implements Resolve<any> {

    constructor(private contactService:ContactService){
    }
    resolve(){
        return this.contactService.getContacts().pipe(map(contacts => contacts))
    }

}