import { LightningElement,api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createPricebook from '@salesforce/apex/PricebookController.insertData';


const pb = {
    Name : '',
    Description: '',
    IsActive: '',
    };

export default class PricebookRecord extends LightningElement {
        pricebook = pb;
        val = true;
        error;
        result;
        data;
        @api msgFromChild;
        acc3={...this.pricebook};
        @api ctwodata;

        
        connectedCallback() {
          //console.log('previous childTwoData',{...this.ctwodata});
          //console.log('acc111',this.acc2);
            this.pricebook = {...this.ctwodata};
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
                if(e.target.label === 'Name')
                {
                    //console.log('acc3',this.acc3);
                    this.acc3.Name = e.target.value;
                }
                if(e.target.label === 'Description')
                {
                    this.acc3.Description = e.target.value;
                
                }
                if(e.target.label === 'IsActive')
                {
                    this.acc3.IsActive= e.target.value;
                }
               
            } catch (error) {
                //console.log(error, 'message');
            }
        }
        
        async submitButton(){
          console.log('final',this.acc3);
            await createPricebook({pricebook: this.acc3})
            .then((result)=>{
              console.log('result of child 2',result);
                this.data = result;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success!!',
                    message: this.data.Id +' '+ +'Pricebook Created Successfully !!',
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