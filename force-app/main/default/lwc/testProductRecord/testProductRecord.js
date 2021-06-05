import { LightningElement,track,wire } from 'lwc';
import ProductHandlerStandardPricebook from '@salesforce/apex/ProductHandlerStandardPricebook.ProductHandlerStandardPricebook';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TestProductRecord extends LightningElement {
    @track prodId;
    @track pricebookId;

    @wire(ProductHandlerStandardPricebook)
    standardpricebookId;

    producthandleSuccess(event){
        this.prodId = event.detail.id;
    }
    pricebookhandleSuccess(event){
        this.pricebookId = event.detail.id;
    }
    
    producthandleClick() {
        const evt = new ShowToastEvent({
            title: "Product created",
            message: "Product Created Succesfully " ,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    pricebookhandleClick() {
        const evt = new ShowToastEvent({
            title: "Pricebook created",
            message: "Pricebook Created " ,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    pricebookEntryhandleSuccess() {
        const evt = new ShowToastEvent({
            title: "PricebookEntry created",
            message: "PricebookEntry Created " ,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    standardpricebookhandleClick(){
        const evt = new ShowToastEvent({
            title: "PricebookEntry created",
            message: "StandardPricebook Created " ,
            variant: "success"
        });
        this.dispatchEvent(evt);

    }
}