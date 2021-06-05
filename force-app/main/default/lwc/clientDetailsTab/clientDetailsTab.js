import { LightningElement } from 'lwc';

export default class ClientDetailsTab extends LightningElement {
    activeTab='1';
    showAcc1=true;
    showAcc2=false;
    record1={};
    record2={};
    record3={};

    handleActive(event) {
        this.activeTab = event.target.value;
       }
       nextpage()
       {
        let activeTabValue = Number(this.activeTab) + 1;
        this.activeTab = activeTabValue.toString();
      }

    //Navigation Buttons
 

  prevpage(){
    let activeTabValue = Number(this.activeTab) - 1;
    this.activeTab = activeTabValue.toString();
  }

  //Data between Components
 handlechild(e){
     this.record1 = {...e.detail};
 }
 handlechild1(e){
     this.record2 = {...e.detail};
 }
 handlechild2(e){
   this.record3 = {...e.detail};
}
}