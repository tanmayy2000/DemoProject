import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

clickbutton(){
const event = new CustomEvent('child', {
// detail contains only primitives
detail: {key1:"ranbir",key2:"Das"}
});
this.dispatchEvent(event);
}
}
