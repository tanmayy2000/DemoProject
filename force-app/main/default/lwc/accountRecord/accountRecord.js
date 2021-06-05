import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/accountRecordClass.getAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_FAX from '@salesforce/schema/Account.Fax';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
import ACCOUNT_ANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_EMPLOYEES from '@salesforce/schema/Account.NumberOfEmployees';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class AccountCreation_Apex extends LightningElement {
 @track accountid;
 @track error;
 @track accountRecord = {
    Name:ACCOUNT_NAME,
    Phone:ACCOUNT_PHONE,
    Fax:ACCOUNT_FAX,
    Rating:ACCOUNT_RATING,
    AnnualRevenue:ACCOUNT_ANNUALREVENUE,
    NumberOfEmployees:ACCOUNT_EMPLOYEES
 };
 handleNameChange(event){
     this.accountRecord.Name = event.target.value;
 }
 handlePhoneChange(event){
    this.accountRecord.Phone = event.target.value;
 }
 handleFaxChange(event){
    this.accountRecord.Fax = event.target.value;
 }
 handleRatingChange(event){
    this.accountRecord.Rating = event.target.value;
 }
 handleAnnualRevenueChange(event){
    this.accountRecord.AnnualRevenue = event.target.value;
 }
 handleNumberOfEmployeesChange(event){
    this.accountRecord.NumberOfEmployees = event.target.value;
 }
 handleSaveAccount(){   
    createAccount({accountRecord:this.accountRecord})
    .then(result=>{    
        this.accountRecord = {};
        this.accountid = result.Id;
        this.lastAccountid=result.Id;
        window.console.log(this.accountid);
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Last Created Account '+ result.Name+ this.accountid,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
        this.error = error.message;
        console.log('ERROR',this.error);
    });
 }

}



