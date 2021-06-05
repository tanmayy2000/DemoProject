import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName}
];
export default class contactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    Contacts;
    get errors() {
        return (this.Contacts.error) ?
            reduceErrors(this.Contacts.error) : [];
    }
}