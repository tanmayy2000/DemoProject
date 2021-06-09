import { LightningElement, track, wire } from 'lwc';
import getEmployees from '@salesforce/apex/CompanyController.getEmployees';
import { refreshApex } from '@salesforce/apex';

export default class CompanyEmployeesRecord extends LightningElement {
    @track data;
    @track value;

    @track record = [];
    @track searchKey = '';
    @track page = 1;
    @track items = [];
    @track data = [];
    @track startingRecord = 1;
    @track endingRecord = 0;
    @track pageSize = 5;
    @track totalRecountCount = 0;
    @track totalPage = 0;

    selectedRecords = [];
    result;
    refreshTable;
    error;

    get options() {
        return [
            { label: '5', value: '5' },
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' }

        ];
    }
    @wire(getEmployees, { searchKey: '$searchKey' })
    wiredEmployees({ error, data }) {
        this.refreshTable = data;
        if (data) {
            this.items = data;
            this.totalRecountCount = data.length;
            this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize);

            this.data = this.items.slice(0, this.pageSize);
            this.endingRecord = this.pageSize;

            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
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

    //this method displays records page by page
    displayRecordPerPage(page) {

        this.startingRecord = ((page - 1) * this.pageSize);
        this.endingRecord = (this.pageSize * page);

        this.endingRecord = (this.endingRecord > this.totalRecountCount)
            ? this.totalRecountCount : this.endingRecord;

        this.data = this.items.slice(this.startingRecord, this.endingRecord);

        this.startingRecord = this.startingRecord + 1;
    }
    handleKeyChange(event) {
        this.searchKey = event.target.value;
        this.endingRecord = this.totalRecountCount;
        return refreshApex(this.result);
    }

    handleChangePageSize(event) {
        this.pageSize = event.target.value;
        this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize);
        this.page = 1;
        this.displayRecordPerPage(this.page);
    }
    handleFirstPage() {
        this.page = 1;
        this.displayRecordPerPage(this.page);
    }
    handleLastPage() {
        this.page = this.totalPage;
        this.displayRecordPerPage(this.page);
    }
}