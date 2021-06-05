import { LightningElement,api,wire } from 'lwc';
import getCases from '@salesforce/apex/ContactCasesOnAccount1.editCases';
import updateCases from '@salesforce/apex/ContactCasesOnAccount1.updateCases';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCasesOnAccount1 extends LightningElement {
    @api recordId;
    updatedCase=[];
    data;
    handleResetAll(){
        this.template.querySelectorAll('lightning-input').forEach(element => {
          if(element.type === 'checkbox' || element.type === 'checkbox-button'){
            element.checked = false;
          }else{
            element.value = null;
          }      
        });
      }

    @wire(getCases, { accId: '$recordId' })
    wiredcase({data})
    {
        if(data)
        {
            this.data=data;
            console.log(this.data);
            for(let i=0;i<this.data.length;i++){
                this.updatedCase.push({CaseNumber:this.data[i].CaseNumber ,Status:this.data[i].Status,Origin:this.data[i].Origin,Priority:this.data[i].Priority,AccountId:this.recordId ,Id:this.data[i].Id});
            }
            console.log(this.updatedContact);
        }     
    }
    

    handlebuttonevent()
        {
             
            updateCases({csList : this.updatedCase})
                .then(result=>{   
                    console.log('result :::',result); 
                    const toastEvent = new ShowToastEvent({
                        title:'Success!',
                        message:'Case Updated Successfully! ',
                        variant:'success'
                    });
                    this.dispatchEvent(toastEvent);
                })
                .catch(error => {
                    console.log('ERROR',error);
                    this.error = error;
                });
        }        
    handleChange(event){
        if(event.target.label === "Status"){
            this.updatedCase[event.target.accessKey].Status = event.target.value;
        }
        if(event.target.label === "Origin"){
            this.updatedCase[event.target.accessKey].Origin = event.target.value;
        }
        if(event.target.label === "Priority"){
            this.updatedCase[event.target.accessKey].Priority = event.target.value;
        }
        console.log("updatedCase:::",this.updatedCase);
    }
}