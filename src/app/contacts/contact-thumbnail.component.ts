import { Component , Input} from '@angular/core';
import { IContact } from './shared/index';
@Component({
  selector: 'contact-thumbnail',
  template: `
    <div [routerLink]="['/contacts', contact.id]" class="well hoverwell thumbnail">
    <h2>{{contact.firstName | uppercase}} {{contact.lastName | uppercase}}</h2>
    <div>Telephone: {{contact?.telephone}}</div>
    <div *ngIf="contact?.mobile">Mobile: {{contact?.mobile}}</div>
    <div *ngIf="contact?.dateOfBirth">Date Of Birth: {{contact?.dateOfBirth | date}}</div>
    <div>Email: {{contact?.emailID}}</div>
    <div *ngIf="contact?.location">
        <span>Location: {{contact?.location?.address}},</span>
        <span>  {{contact?.location.city}}, {{contact.location.state}}</span>
    </div>
</div>

  `,
  styles: [`
  .green { color: #003300 !important; }
  .bold { font-weight: bold; }
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  `]
})

export class ContactThumbnailComponent {
    @Input() contact:IContact;

}