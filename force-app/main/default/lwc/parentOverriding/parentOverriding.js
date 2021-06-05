import { LightningElement } from 'lwc';

export default class ParentOverriding extends LightningElement {
    greeting;
    renderedCallback() {
      console.log("called renderedcallback");
    }
    connectedCallback(){
      console.log('called connectedcallback');
  }
    handleChange(event){
      this.greeting = event.target.value;
      }     
}