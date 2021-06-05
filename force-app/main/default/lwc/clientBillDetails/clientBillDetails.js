import { LightningElement,api} from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createBill from '@salesforce/apex/BillDetailController.insertData';
const billDetails = {
    Name : '',
    Bill_Amount__c: '',
};

export default class ClientBillDetails extends LightningElement {
    Bill_Detail__c = billDetails;
    val = true;
    error;
    result;
    data;
    @api msgfromchildtwo;
    @api cthreedata;
    con3;

    connectedCallback() {
        this.Bill_Detail__c = {...this.cthreedata};
        this.con3 = {...this.msgfromchildtwo} ;
    }

    pagehandlerpre(){
        this.dispatchEvent(new CustomEvent('billtoclientaddresspage',{
            detail:'billtoclientaddress'
        }));
    }

    pagehandlersubmit(){
        this.submitButton();
        this.dispatchEvent(new CustomEvent('caif',{
            detail: 'cai'
        }));
    }
    
   
    handleChange(e){
        if(e.target.label === 'Name')
        {
            this.con3.Name = e.target.value;
            console.log(this.con3.Name);
        }
        if(e.target.label === 'Amount')
        {             
            this.con3.Bill_Amount__c= e.target.value;
            console.log(this.con3.Bill_Amount__c);           
        }
    }

    async submitButton(){
        const {Name,Bill_Amount__c}={...this.con3};
        const Client_Detail__c = this.con3.Id;
        let text={Client_Detail__c,Name,Bill_Amount__c};
        await createBill({billdetails: text})
        .then((result)=>{
            console.log('RESULT:::',result);
            this.data = result;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Bill Created Successfully !!',
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