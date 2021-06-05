import { LightningElement,api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createClientDetails from '@salesforce/apex/ClientDetailsController.createClientDetails';


const clientdetails = {
    Name : '',
    Phone__c: '',
    Gender__c : '',
    Email__c:'',
};
export default class ClientDetailsone extends LightningElement {
    activeTab = '1';
    Client_Detail__c = clientdetails;
        val = true;
        error;
        result;
        data;
        @api conedata;
    connectedCallback(){
        console.log('conedata',{...this.conedata});
        this.Client_Detail__c = {...this.conedata};                
    }

     handleChange(e){
        if(e.target.label === 'Name')
        {
            this.Client_Detail__c.Name = e.target.value;
            console.log(this.Client_Detail__c.Name);
        }
        if(e.target.label === 'Phone')
        {             
            this.Client_Detail__c.Phone__c= e.target.value;    
            console.log(this.Client_Detail__c.Phone__c);       
        }
        if(e.target.label === 'Gender')
        {         
            this.Client_Detail__c.Gender__c = e.target.value;
            console.log(this.Client_Detail__c.Gender__c); 
        
        }
        if(e.target.label === 'Email')
        {         
            this.Client_Detail__c.Email__c = e.target.value;
            console.log(this.Client_Detail__c.Email__c); 
        }
    }

    Client_Detail__c = clientdetails;
        val = true;
        async pagehandler(){
            await this.submitButton();
            this.dispatchEvent(new CustomEvent('personalinfopage',{
                detail:'personalinfo'
            }));
        }
        
        @api
        async submitButton(){
        if(this.Client_Detail__c.Name === '' || this.Client_Detail__c.Phone__c === ''|| this.Client_Detail__c.Gender__c === ''||this.Client_Detail__c.Email__c === '')
        {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Faliure!!',
                message: 'Please add Valid information',
                variant: 'faliure'
            })); 
        }
        else{
            console.log('CLIENT PERSONAL INFO:::',this.Client_Detail__c);
            await createClientDetails({clientdetails: this.Client_Detail__c})
            .then((result)=>{
                console.log('RESULT:::',result);
                this.data = result;
                this.dispatchEvent(new CustomEvent('childevent', {
                    detail: result
                }));
            })
            .catch((error)=>{
                this.error = error;
            });
            
        }
    }      
}