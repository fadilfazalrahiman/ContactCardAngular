import { Component  } from "@angular/core";
import { Router } from "@angular/router";
import { ContactService } from "./shared/index";
import { IContact } from "./shared/index";
import { ThrowStmt } from "@angular/compiler";
@Component({

    templateUrl: './create-contact.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999;}
  `]
})

export class CreateContactComponent {
    isDirty:boolean = true
    firstName:string = ""
    lastName:string = ""
    telephone:string = ""
    mobile:string = ""
    dateOfBirth:string = ""
    emailID:string = ""
    address:string = ""
    city:string = ""
    state:string = ""
    constructor(private router: Router, private contactService:ContactService){
    }
    saveContact(formValues){
        const newContact = {
            firstName: this.firstName,
            lastName: this.lastName,
            telephone: this.telephone,
            mobile: this.mobile,
            dateOfBirth: new Date(this.dateOfBirth),
            emailID: this.emailID,
            location: {
                address: this.address,
                city: this.city,
                state: this.state
            },
        }
        this.isDirty = false
        this.contactService.saveContact(newContact)
        this.router.navigate(['/contacts'])
    }
    
    cancel(){

        this.router.navigate(['/contacts'])

    }

}
