import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createClientDetails from '@salesforce/apex/ClientDetailsController.createClientDetails';
const clientdetails = {
    Address__c : '',
    Fax__c: '',
};

export default class ClientDetailstwo extends LightningElement {

    cd = clientdetails;
        val = true;
        error;
        result;
        data;
        @api msgFromChild;
        acc3={...this.cd};
        @api ctwodata;

        connectedCallback() {
            //console.log('previous childTwoData',{...this.ctwodata});
            //console.log('acc111',this.acc2);
              this.cd = {...this.ctwodata};
              console.log(this.cd);
            //console.log('acc222',this.acc2);
              this.acc3 = {...this.msgFromChild};
              console.log(this.acc3);
          }

          async pagehandler(){
            await this.submitButton();
            this.dispatchEvent(new CustomEvent('clientaddressinfopage',{
                detail: 'clientaddressinfo'
            }));
        }
        
        pagehandlerpre(){
            this.dispatchEvent(new CustomEvent('clientpreviouspage',{
                detail: 'clientaddressinfo'
            }));
        }
        
       
        handleChange(e){
            if(e.target.label === 'Address')
            {
                this.cd.Address__c = e.target.value;
                console.log(this.cd.Address__c);
            }
            if(e.target.label === 'Fax')
            {             
                this.cd.Fax__c= e.target.value;           
            }
        }
        async submitButton(){
            if(this.cd.Address__c === '' || this.cd.Fax__c === '')
            {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Faliure!!',
                    message: 'Please add Valid information',
                    variant: 'faliure'
                })); 
            }else{
            this.acc3={...this.acc3,...this.cd};
            console.log(this.acc3);
            console.log('CLIENT ADDRESS INFO:::',this.acc3);
              await createClientDetails({clientdetails: this.acc3})
              .then((result)=>{
                console.log('RESULT:::',result);
                  this.data = result;
                  this.dispatchEvent(new ShowToastEvent({
                      title: 'Success!!',
                      message: 'Client Record created Successfully !!',
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
}