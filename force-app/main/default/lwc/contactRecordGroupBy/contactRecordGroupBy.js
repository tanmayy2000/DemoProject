import { LightningElement, track, wire} from 'lwc';
import getRecords from '@salesforce/apex/ContactControllerGroupBy.getContacts';
import { refreshApex } from '@salesforce/apex';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import FAX_FIELD from '@salesforce/schema/Contact.Fax';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
const COLUMNS = [
    { label: 'FirstName', fieldName: FIRSTNAME_FIELD.fieldApiName },
    { label: 'LastName', fieldName: LASTNAME_FIELD.fieldApiName },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName },
    { label: 'Fax', fieldName: FAX_FIELD.fieldApiName },
    { label: 'Phone', fieldName: PHONE_FIELD.fieldApiName }
];
export default class ContactRecordGroupBy extends LightningElement {

    @track object = [];
    @track value;
    @track columns = [];
    @track startingRecord;
    @track endingRecord;
    @track page = 1;
    @track data = [];
    @track startingRecord = 1;
    @track endingRecord = 0;
    @track pageSize = 5;
    @track totalRecountCount = 0;
    @track totalPage = 1;
    @track fetchedRecords = [];
    @track objectApiName;
    @track searchKey = '';
    fields = [];
    @track selected = [];
    columns = COLUMNS;
    @wire(getRecords)
    contacts({ data, error }) {
        if (data) {
            this.fetchedRecords = data;
            console.log("fetchedRecords from wire method---->", data);
            this.totalRecountCount = data.length;
            this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize);
            if (this.totalRecountCount === 0) {
                this.totalPage = 1;
            }
            
            this.data = this.fetchedRecords.slice(0, this.pageSize);
            this.endingRecord = this.pageSize;
            this.error = undefined;
            console.log('fetchedRecords are--->' + this.fetchedRecords);
        } else if (error) {
            console.log(error);
        }

    }
    handleKeyChange(event) {
        this.searchKey = event.target.value;
        return refreshApex(this.result);
    }

    get options() {
        return [
            { label: '5', value: '5' },
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' }

        ];
    }
    //on changing page size in combobox to get no of records per page will be called 
    handleChangePageSize(event) {
        this.pageSize = event.target.value;
        this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize);
        this.page = 1;
        this.displayRecordPerPage(this.page);
    }

    //this method is used to display records per page according to the page number 
    displayRecordPerPage(page) {

        this.startingRecord = ((page - 1) * this.pageSize);
        this.endingRecord = (this.pageSize * page);

        this.endingRecord = (this.endingRecord > this.totalRecountCount)
            ? this.totalRecountCount : this.endingRecord;
        this.data = this.fetchedRecords.slice(this.startingRecord, this.endingRecord);

        this.startingRecord = this.startingRecord + 1;
    }
    //clicking on previous button this method will be called   
    previousHandler() {
        if (this.page > 1) {
            this.page = this.page - 1; //decrease page by 1
            this.displayRecordPerPage(this.page);
        }
    }

    //clicking on next button this method will be called
    nextHandler() {
        if ((this.page < this.totalPage) && this.page !== this.totalPage) {
            this.page = this.page + 1; //increase page by 1
            this.displayRecordPerPage(this.page);
        }
    }
}