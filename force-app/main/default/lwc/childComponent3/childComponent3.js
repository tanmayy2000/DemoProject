import { LightningElement,api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createContacts from '@salesforce/apex/ContactController.insertData';


const contact = {
    LastName : '',
    Email: '',
    Department: '',
    OtherPhone: '',
};

export default class ChildComponent3 extends LightningElement {
        con2 = contact;
        val = true;
        error;
        result;
        data;
        @api msgfromchildtwo;
        @api cthreedata;
        con3={...this.con2};
        
        connectedCallback() {
            this.con2 = {...this.cthreedata};
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
                if(e.target.label === 'Last Name')
                {
                    this.con3.LastName = e.target.value;
                }
                if(e.target.label === 'Email')
                {
                    this.con3.Email = e.target.value;
                
                }
                if(e.target.label === 'Department')
                {
                this.con3.Department = e.target.value;
                }
                if(e.target.label === 'OtherPhone')
                {
                this.con3.OtherPhone = e.target.value;
                }

            } catch (error) {
                console.log(error, 'message');
            }
        }
        
        async submitButton(){
            const {LastName,Email,Department,OtherPhone}={...this.con3};
            const AccountId = this.con3.Id;
            let text={AccountId,LastName,Email,Department,OtherPhone};
            await createContacts({con: text})
            .then((result)=>{
                this.data = result;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success!!',
                    message: this.data.Id +' '+ +'Contact of that Account Created Successfully !!',
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