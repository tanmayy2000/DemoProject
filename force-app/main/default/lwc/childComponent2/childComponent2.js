import { LightningElement,api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createAccounts from '@salesforce/apex/AccountController.createAccount';


const account = {
    AnnualRevenue : '',
    Fax: '',
    Description: '',
    Tradestyle: '',
};

export default class ChildComponent2 extends LightningElement {
        acc2 = account;
        val = true;
        error;
        result;
        data;
        @api msgFromChild;
        acc3={...this.acc2};
        @api ctwodata;

        
        connectedCallback() {
          //console.log('previous childTwoData',{...this.ctwodata});
          //console.log('acc111',this.acc2);
            this.acc2 = {...this.ctwodata};
          //console.log('acc222',this.acc2);
            this.acc3 = {...this.msgFromChild};
        }
     
        async pagehandler(){
            await this.submitButton();
            this.dispatchEvent(new CustomEvent('childpagetwo',{
                detail: 'child2'
            }));
        }
        
        pagehandlerpre(){
            this.dispatchEvent(new CustomEvent('childpageprev',{
                detail: 'child2'
            }));
        }

        handleChange(e){
           
            try {
                if(e.target.label === 'Annual Revenue')
                {
                    //console.log('acc3',this.acc3);
                    this.acc3.AnnualRevenue = e.target.value;
                }
                if(e.target.label === 'Fax')
                {
                    this.acc3.Fax = e.target.value;
                
                }
                if(e.target.label === 'Description')
                {
                    this.acc3.Description= e.target.value;
                }
                if(e.target.label === 'Tradestyle')
                {
                  console.log('channel ',e.target.value);
                    this.acc3.Tradestyle = e.target.value;
                  console.log('channel ', this.acc3.Tradestyle);

                }
            } catch (error) {
                //console.log(error, 'message');
            }
        }
        
        async submitButton(){
          console.log('final',this.acc3);
            await createAccounts({acc: this.acc3})
            .then((result)=>{
              console.log('result of child 2',result);
                this.data = result;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success!!',
                    message: this.data.Id +' '+ +'Account Created Successfully !!',
                    variant: 'success'
                }));
                this.dispatchEvent(new CustomEvent('childeventone', {
                    detail: result
                }));
               
            })
            .catch((error)=>{
                this.error = error;
            });
            
        }
    }