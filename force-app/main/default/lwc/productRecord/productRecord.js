import { LightningElement, api } from 'lwc';
import {  ShowToastEvent } from 'lightning/platformShowToastEvent';
import createProducts from '@salesforce/apex/ProductController.createProduct';


const prod = {
    Name : '',
    Description: '',
    IsActive : '',
};
export default class ChildComponent1 extends LightningElement {
       product = prod;
        val = true;
        error;
        result;
        data;
        @api conedata;
       
      connectedCallback(){
         console.log('conedata',{...this.conedata});
         this.product = {...this.conedata};                
      }
        handleChange(e){
            if(e.target.label === 'Name')
            {
                this.product.Name = e.target.value;
            }
            if(e.target.label === 'Description')
            {             
                this.product.Description= e.target.value;           
            }
            if(e.target.label === 'IsActive')
            {         
            this.product.IsActive = e.target.value;
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
        
            console.log('child1Product',this.product);
            await createProducts({prod: this.product})
            .then((result)=>{
                console.log('res====',result);
                this.data = result;
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success!!',
                    message: this.data.Id +' '+ +'Product Created Successfully !!',
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

    