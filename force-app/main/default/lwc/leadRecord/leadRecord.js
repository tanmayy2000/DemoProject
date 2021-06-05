import { LightningElement, track } from 'lwc';
import ldRecord from '@salesforce/apex/leadRecordClass.leadRecordMethod';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import LEAD_MOBILEPHONE from '@salesforce/schema/Lead.MobilePhone';

export default class LeadRecord extends LightningElement {
    
    @track result;
    @track error;
    @track ldMobilePhone = {
        MobilePhone: LEAD_MOBILEPHONE
    };

    leadMobilePhoneSuccessHandler(event){
        this.leadRecordMethod.MobilePhone = event.target.value;
    }
    
   createLead(){
       ldRecord({MobilePhone:this.MobilePhone})
       .then(result=>{   
        window.console.log('result ====> ' + result);
        this.leadRecordMethod = {};
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Last Created Lead',
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