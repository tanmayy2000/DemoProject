import { LightningElement,api } from 'lwc';

export default class TaskChildComponent extends LightningElement {
    myVal;
    handleChange(event) {
        const custEvent = new CustomEvent(
            'child', {
                detail: event.target.value 
            });
        this.dispatchEvent(custEvent);
    }
    @api get getMyValue() {
        return this.myVal;
    }
    set getMyValue(value) {
        this.setAttribute('getMyValue', value);
        this.myVal = value;
        this.handleValueChange(value);
    }

    handleValueChange(value) {
        console.log(value);
    }
}
   