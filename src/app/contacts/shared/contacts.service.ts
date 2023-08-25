import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IContact } from './contact.model';

@Injectable()
export class ContactService {
  private storageKey = 'contacts';

  saveContact(contact): void {
    let contacts: IContact[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    
    const maxId = Math.max(...contacts.map(e => e.id), 0);
    contact.id = maxId + 1;
    contacts.push(contact);
    
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  getContact(id: number): IContact | undefined {
    const contacts: IContact[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    return contacts.find(contact => contact.id === id);
  }

  getContacts(): Observable<IContact[]> {
    let subject = new Subject<IContact[]>();

    setTimeout(() => {
      const contacts: IContact[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];
      subject.next(contacts);
      subject.complete();
    }, 500);

    return subject;
  }
}
