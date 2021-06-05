import { LightningElement,wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import NAME_FIELD from '@salesforce/schema/Client_Detail__c.Name';
import PHONE_FIELD from '@salesforce/schema/Client_Detail__c.Phone__c';
import ADDRESS_FIELD from '@salesforce/schema/Client_Detail__c.Address__c';
import EMAIL_FIELD from '@salesforce/schema/Client_Detail__c.Email__c';
import FAX_FIELD from '@salesforce/schema/Client_Detail__c.Fax__c';
import GENDER_FIELD from '@salesforce/schema/Client_Detail__c.Gender__c';
import BILLNAME_FIELD from '@salesforce/schema/Bill_Detail__c.Name';
import AMOUNT_FIELD from '@salesforce/schema/Bill_Detail__c.Bill_Amount__c';
import CD_FIELD from '@salesforce/schema/Bill_Detail__c.Client_Detail__c';
import getClientDetails from '@salesforce/apex/ClientDetailsController.getClientDetails';
import getBillDetails from '@salesforce/apex/ClientDetailsController.getBillDetails';
const COLUMNS = [
    { label: 'Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Phone', fieldName: PHONE_FIELD.fieldApiName, type: 'phone' },
    { label: 'Address', fieldName: ADDRESS_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' },
    { label: 'Fax', fieldName: FAX_FIELD.fieldApiName, type: 'fax' },
    { label: 'Gender', fieldName: GENDER_FIELD.fieldApiName, type: 'text' }
];

const COLUMNS1 = [
    { label: 'BillName', fieldName: BILLNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Amount', fieldName: AMOUNT_FIELD.fieldApiName, type: 'currency' },
    { label: 'Client details', fieldName: CD_FIELD.fieldApiName, type: 'text' }
];

export default class ClientDetailsPreview extends LightningElement {
    columns = COLUMNS;
    columns1 = COLUMNS1;
    @wire(getClientDetails)
    getdetails;
    get errors() {
        return (this.getdetails.error) ?
            reduceErrors(this.getdetails.error) : [];
    }

    @wire(getBillDetails)
    getbilldetails;
    get errors1() {
        return (this.getbilldetails.errors1) ?
            reduceErrors(this.getbilldetails.error1) : [];
    }
}

    
