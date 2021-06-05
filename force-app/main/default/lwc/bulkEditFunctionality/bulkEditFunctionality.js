import { LightningElement, wire, api} from 'lwc';
import getContacts from '@salesforce/apex/BulkEditFunctionalityController.editContact';
import updateContacts from '@salesforce/apex/BulkEditFunctionalityController.updateContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BulEditFunctionality extends LightningElement {
    @api recordId;
    updatedContact=[];
    data;

    @wire(getContacts, { accId: '$recordId' })
    contact({data})
    {
        if(data)
        {
            this.data=data;
            console.log(this.data);
            for(let i=0;i<this.data.length;i++){
                this.updatedContact.push({FirstName:this.data[i].FirstName ,LastName:this.data[i].LastName,Title:this.data[i].Title,Email:this.data[i].Email,Phone:this.data[i].Phone,AccountId:this.recordId ,Id:this.data[i].Id});
            }
            console.log(this.updatedContact);
        }     
    }
   
    handlebuttonevent()
        {
             
            updateContacts({conList : this.updatedContact})
                .then(result=>{   
                    console.log('result :::',result); 
                    const toastEvent = new ShowToastEvent({
                        title:'Success!',
                        message:'Contact Updated Successfully! ',
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
        if(event.target.name === "input1"){
            this.updatedContact[event.target.accessKey].FirstName = event.target.value;
        }
        if(event.target.name === "input2"){
            this.updatedContact[event.target.accessKey].LastName = event.target.value;
        }
        if(event.target.name === "input3"){
            this.updatedContact[event.target.accessKey].Title = event.target.value;
        }
        if(event.target.name === "input4"){
            this.updatedContact[event.target.accessKey].Email = event.target.value;
        }
        if(event.target.name === "input5"){
            this.updatedContact[event.target.accessKey].Phone = event.target.value;
        }
        console.log("updatedContact:::",this.updatedContact);
    }
   
}