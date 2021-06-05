import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';



export default class ContactRecord extends LightningElement {
    
    accountSuccessHandler(event){
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Account Created '+ event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }
    contactSuccessHandler(event){
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Contact Created '+ event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }
    opportunitySuccessHandler(event){
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Opportunity Created '+ event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }
    pricebookSuccessHandler(event){
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Pricebook Created '+ event.detail.id+ event.detail.name,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }
    productSuccessHandler(event){
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Product Created '+ event.detail.id,
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    }


}