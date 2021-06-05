import { LightningElement, api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createAccounts from '@salesforce/apex/AccountController.createAccount';


const acc = {
    Name : '',
    Phone: '',
    Industry : '',
    Site:'',
};
export default class ChildComponent1 extends LightningElement {
       account = acc;
        val = true;
        error;
        result;
        data;
        @api conedata;
       
      connectedCallback(){
         console.log('conedata',{...this.conedata});
         this.account = {...this.conedata};                
      }
        handleChange(e){
            if(e.target.label === 'Name')
            {
                this.account.Name = e.target.value;
            }
            if(e.target.label === 'Phone')
            {             
                this.account.Phone= e.target.value;           
            }
            if(e.target.label === 'Industry')
            {         
            this.account.Industry = e.target.value;
            }
            if(e.target.label === 'Account Site')
            {         
            this.account.Site = e.target.value;
            }
        }

        async pagehandler(){
            await this.submitButton();
            this.dispatchEvent(new CustomEvent('childpage',{
                detail:'child1'
            }));
        }
        
        @api
        async submitButton(){
        if(this.account.Name === '' || this.account.Phone === ''|| this.account.Industry === '')
        {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Faliure!!',
                message: 'Please add Valid information',
                variant: 'faliure'
            })); 
       
        }
        else{
            console.log('child1Account',this.account);
            await createAccounts({acc: this.account})
            .then((result)=>{
                console.log('res====',result);
                this.data = result;
                this.dispatchEvent(new CustomEvent('childevent', {
                    detail: result
                }));
                // this.account.Name = result.Name;
                // this.account.Industry = result.Industry;
                // this.account.Phone = result.Phone;
            })
            .catch((error)=>{
                this.error = error;
            });
            
        }
    }
    }