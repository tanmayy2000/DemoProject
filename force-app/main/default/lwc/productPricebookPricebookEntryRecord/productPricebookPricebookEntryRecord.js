import { LightningElement } from 'lwc';

export default class ProductPricebookPricebookEntryRecord extends LightningElement {
 showAcc1=true;
 showAcc2=false;
 record1={};
 record2={};
 record3={};

//Navigation Buttons
  nextpage(e){
     if(e.detail === 'child1')
     {
      this.showAcc1=false; 
      this.showAcc2 =true;
      this.showAcc3 = false;
     }
     if(e.detail === 'child2')
     {
      this.showAcc1=false;
      this.showAcc2 =false;
      this.showAcc3=true;
     }
  }

  prevpage(e){
   if(e.detail === 'child2')
   {
    this.showAcc1=true; 
    this.showAcc2 =false;
    this.showAcc3 = false;
   }
   if(e.detail === 'child3')
   {
    this.showAcc1=false;
    this.showAcc2 =true;
    this.showAcc3=false;
   }
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