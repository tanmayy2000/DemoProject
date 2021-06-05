import { LightningElement,api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import pricebookEntry from '@salesforce/apex/PricebookEntryController.insertData';


const pbe = {
    Product2Id : '',
    Pricebook2Id: '',
    UnitPrice: '',
   
};

export default class ChildComponent3 extends LightningElement {
        pricebookEntry = pbe;
        val = true;
        error;
        result;
        data;
        @api msgfromchildtwo;
        @api cthreedata;
        con3={...this.pricebookEntry};
        
        connectedCallback() {
            this.pricebookEntry = {...this.cthreedata};
            this.con3 = {...this.msgfromchildtwo} ;
        }
        
        
        pagehandlerpre(){
            this.dispatchEvent(new CustomEvent('childpageprevone',{
                detail:'child3'
            }));
        }

        pagehandlersubmit(){
            this.submitButton();
        }
        handleChange(e){
           
            try {
                if(e.target.label === 'Product2Id')
                {
                    this.con3.Product2Id = e.target.value;
                }
                if(e.target.label === 'Pricebook2Id')
                {
                    this.con3.Pricebook2Id = e.target.value;
                
                }
                if(e.target.label === 'UnitPrice')
                {
                this.con3.UnitPrice = e.target.value;
                }
            } catch (error) {
                console.log(error, 'message');
            }
        }
        
        async submitButton(){
            const {UnitPrice}={...this.con3};
            const Product2Id = this.con3.Id;
            const Pricebook2Id = this.con3.Id;

            let text={Product2Id,Pricebook2Id,UnitPrice};
            await pricebookEntry({pricebookentry: text})
            .then((result)=>{
                this.data = result;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success!!',
                    message: this.data.Id +' '+ +'PricebookEntry Successfull !!',
                    variant: 'success'
                }));
                this.dispatchEvent(new CustomEvent('childeventtwo', {
                    detail: result
                }));
                // localStorage.clear();
            })
            .catch((error)=>{
                this.error = error;
            });
            
        }
    }