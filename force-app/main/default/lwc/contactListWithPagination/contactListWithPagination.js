import {LightningElement, track, wire} from 'lwc';

// importing apex class methods
import getContacts from '@salesforce/apex/ContactControllerGroupBy.getContacts';
import delSelectedCons from '@salesforce/apex/ContactControllerGroupBy.deleteContacts';

// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

// importing to refresh the apex if any record changes the datas
import {refreshApex} from '@salesforce/apex';

// row actions
const actions = [
    { label: 'Record Details', name: 'record_details'}, 
    { label: 'Edit', name: 'edit'}, 
    { label: 'Delete', name: 'delete'}
];

// datatable columns with row actions
const columns = [
    { label: 'FirstName', fieldName: 'FirstName' }, 
    { label: 'LastName', fieldName: 'LastName' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone'}, 
    { label: 'Email', fieldName: 'Email', type: 'email' }, 
    {
        type: 'action',
        typeAttributes: {
            rowActions: actions,
            menuAlignment: 'right'
        }
    }
];

export default class contactListWithPagination extends LightningElement { 
    // reactive variable
    @track data;
    @track value;
    @track columns = columns;
    @track record = [];
    @track bShowModal = false;
    @track currentRecordId;
    @track isEditForm = false;
    @track showLoadingSpinner = false;
    @track searchKey = '';
    @track page=1;
    @track items=[];
    @track data =[];
    @track startingRecord=1;
    @track endingRecord = 0;
    @track pageSize = 5;
    @track totalRecountCount=0;
    @track totalPage=0;

    // non-reactive variables
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

    // retrieving the data using wire service
    @wire(getContacts,{searchKey: '$searchKey'})
    wiredContacts({error,data}) {
        this.refreshTable = data;
        if (data) {
            this.items = data;
            this.totalRecountCount = data.length; 
            this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize); 
            
            this.data = this.items.slice(0,this.pageSize); 
            this.endingRecord =this.pageSize;
            this.columns = columns;
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
        if((this.page<this.totalPage) && this.page !== this.totalPage){
            this.page = this.page + 1; //increase page by 1
            this.displayRecordPerPage(this.page);            
        }             
    }

    //this method displays records page by page
    displayRecordPerPage(page){

        this.startingRecord = ((page -1) * this.pageSize) ;
        this.endingRecord = (this.pageSize * page);

        this.endingRecord = (this.endingRecord > this.totalRecountCount) 
                            ? this.totalRecountCount : this.endingRecord; 

        this.data = this.items.slice(this.startingRecord, this.endingRecord);

        this.startingRecord = this.startingRecord + 1;
    }    
    handleKeyChange( event ) {
        this.searchKey = event.target.value;
        this.endingRecord=this.totalRecountCount;
        return refreshApex(this.result);
    }
    
    handleChangePageSize(event) {
        this.pageSize = event.target.value;
        this.totalPage = Math.ceil(this.totalRecountCount / this.pageSize);
        this.page = 1;
        this.displayRecordPerPage(this.page);
    }
    handleFirstPage(){
        this.page = 1;
        this.displayRecordPerPage(this.page);
    }
    handleLastPage()
    {
        this.page = this.totalPage;
        this.displayRecordPerPage(this.page);
    }

    handleRowActions(event) {
        let actionName = event.detail.action.name;

        window.console.log('actionName ====> ' + actionName);

        let row = event.detail.row;

        window.console.log('row ====> ' + row);
        // eslint-disable-next-line default-case
        switch (actionName) {
            case 'record_details':
                this.viewCurrentRecord(row);
                break;
            case 'edit':
                this.editCurrentRecord(row);
                break;
            case 'delete':
                this.deleteCons(row);
                break;
        }
    }

    // view the current record details
    viewCurrentRecord(currentRow) {
        this.bShowModal = true;
        this.isEditForm = false;
        this.record = currentRow;
    }

    // closing modal box
    closeModal() {
        this.bShowModal = false;
    }


    editCurrentRecord(currentRow) {
        // open modal box
        this.bShowModal = true;
        this.isEditForm = true;

        // assign record id to the record edit form
        this.currentRecordId = currentRow.Id;
    }

    // handleing record edit form submit
    handleSubmit(event) {
        // prevending default type sumbit of record edit form
        event.preventDefault();

        // querying the record edit form and submiting fields to form
        this.template.querySelector('lightning-record-edit-form').submit(event.detail.fields);

        // closing modal
        this.bShowModal = false;

        // showing success message
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success!!',
            message: event.detail.fields.FirstName + ' '+ event.detail.fields.LastName +' Contact updated Successfully!!.',
            variant: 'success'
        }),);

    }

    // refreshing the datatable after record edit form success
    handleSuccess() {
        return refreshApex(this.refreshTable);
        
    }

    deleteCons(currentRow) {
        let currentRecord = [];
        currentRecord.push(currentRow.Id);
        this.showLoadingSpinner = true;

        // calling apex class method to delete the selected contact
        delSelectedCons({lstConIds: currentRecord})
        .then(result => {
            window.console.log('result ====> ' + result);
            this.showLoadingSpinner = false;

            // showing success message
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: currentRow.FirstName + ' '+ currentRow.LastName +' Contact deleted.',
                variant: 'success'
            }),);

            // refreshing table data using refresh apex
             return refreshApex(this.refreshTable.data);

        })
        .catch(error => {
            window.console.log('Error ====> '+error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error!!', 
                message: error.message, 
                variant: 'error'
            }),);
        });
    }

}