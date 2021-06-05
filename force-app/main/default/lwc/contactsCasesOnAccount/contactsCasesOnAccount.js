import { LightningElement, wire, api } from "lwc";
import getContacts from "@salesforce/apex/ContactsCasesOnAccount.editContact";
import updateContacts from "@salesforce/apex/ContactsCasesOnAccount.updateContacts";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ContactsCasesOnAccount extends LightningElement {
  @api recordId;
  updatedContact = [];
  data;
  handleResetAll() {
    this.template.querySelectorAll("lightning-input").forEach((element) => {
      if (element.type === "checkbox" || element.type === "checkbox-button") {
        element.checked = false;
      } else {
        element.value = null;
      }
    });
  }

  @wire(getContacts, { accId: "$recordId" })
  wiredcontact({ data }) {
    if (data) {
      this.data = data;
      console.log(this.data);
      for (let i = 0; i < this.data.length; i++) {
        this.updatedContact.push({
          FirstName: this.data[i].FirstName,
          LastName: this.data[i].LastName,
          Title: this.data[i].Title,
          Email: this.data[i].Email,
          Phone: this.data[i].Phone,
          AccountId: this.recordId,
          Id: this.data[i].Id
        });
      }
      console.log(this.updatedContact);
    }
  }

  handlebuttonevent() {
    updateContacts({ conList: this.updatedContact })
      .then((result) => {
        console.log("result :::", result);
        const toastEvent = new ShowToastEvent({
          title: "Success!",
          message: "Contact Updated Successfully! ",
          variant: "success"
        });
        this.dispatchEvent(toastEvent);
      })
      .catch((error) => {
        console.log("ERROR", error);
        this.error = error;
      });
  }
  handleChange(event) {
      console.log('res:::',this.updatedContact[event.target.accessKey][event.currentTarget.dataset.field]);
    this.updatedContact[event.target.accessKey][event.currentTarget.dataset.field] = event.target.value;

    // if(event.target.label === "Firstname"){
    //     this.updatedContact[event.target.accessKey].FirstName = event.target.value;
    // }
    // if(event.target.label === "Lastname"){
    //     this.updatedContact[event.target.accessKey].LastName = event.target.value;
    // }
    // if(event.target.label === "Title"){
    //     this.updatedContact[event.target.accessKey].Title = event.target.value;
    // }
    // if(event.target.label === "Email"){
    //     this.updatedContact[event.target.accessKey].Email = event.target.value;
    // }
    // if(event.target.label === "Phone"){
    //     this.updatedContact[event.target.accessKey].Phone = event.target.value;
    // }
    // console.log("updatedContact:::",this.updatedContact);
  }
}
