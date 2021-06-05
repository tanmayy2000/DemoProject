import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRelatedContactRecord extends NavigationMixin(LightningElement) {
    @track accountId;
    @track fields ={};
    keyIndex = 0;
    @track conrecList = [];
    @track accRecord ={
        Name:'',
        AccountNumber:'',
        Rating:'',
        Fax:'',
        Phone:'',
        NumberOfEmployees:''
    };
    
    handleAccount(e){
        if(e.target.label === 'Name'){
            this.accRecord.Name = e.target.value;
        }
        if(e.target.label === 'AccountNumber'){
            this.accRecord.AccountNumber = e.target.value;
        }
        if(e.target.label === 'Rating'){
            this.accRecord.Rating = e.target.value;
        }
        if(e.target.label === 'Fax'){
            this.accRecord.Fax = e.target.value;
        }
        if(e.target.label === 'Phone'){
            this.accRecord.Phone = e.target.value;
        }
        if(e.target.label === 'NumberOfEmployees'){
            this.accRecord.NumberOfEmployees = e.target.value;
        }
    }
    @track conRecord ={
        FirstName:'',
        LastName:'',
        Title:'',
        Email:'',
    };
    handleContact(event){
        if(event.target.label === 'FirstName'){
            this.conRecord.FirstName = event.target.value;
        }
        if(event.target.label === 'LastName'){
            this.conRecord.LastName = event.target.value;
        }
        if(event.target.label === 'Title'){
            this.conRecord.Title = event.target.value;
        }
        if(event.target.label === 'Email'){
            this.conRecord.Email = event.target.value;
        }
    }
    @track itemList = [
        {
            id: 0
        }
    ];

    addRow() {
        ++this.keyIndex;
        var newItem = [{ id: this.keyIndex }];
        this.itemList = this.itemList.concat(newItem);
    }

    removeRow(event) {
        if (this.itemList.length >= 2) {
            this.itemList = this.itemList.filter(function (element) {
                return parseInt(element.id) !== parseInt(event.target.accessKey);
            });
        }
    }

    handleSubmit(event) {
        this.accountId = event.target.id
            .then(result=>{   
                console.log('result :::'+result); 
                this.accountid = result.Id;
                const toastEvent = new ShowToastEvent({
                    title:'Success!',
                    message:'Last Created Account ',
                    variant:'success'
                });
                this.dispatchEvent(toastEvent);
            })
            .catch(error => {
                console.log('ERROR',error);
                this.error = error;
            });
        }
    }

