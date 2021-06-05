import { LightningElement,track } from 'lwc';

export default class TaskParentComponent extends LightningElement {
        @track parVal;
        fieldValue;
        
        passToParent(event){
           this.parVal = event.detail;
        }
        parentHandleChange(event) {
            this.fieldValue = event.target.value;
        }
       
    }
    