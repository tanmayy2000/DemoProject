import { LightningElement,track,wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountObjectControllerClass.findContactByAccountId';

export default class AccountObjectControllerClass extends LightningElement {
@track columns = [{
    label: 'Name',
    fieldName: 'LastName',
    type: 'text',
    sortable: true
},
{
    label: 'Account Name',
    fieldName: 'AccountId',
    type: 'text',
    sortable: true
},
{
    label: 'Phone',
    fieldName: 'Phone',
    type: 'phone',
    sortable: true
},
{
    label: 'Email',
    fieldName: 'Email',
    type: 'text',
    sortable: true
},
{
    label: 'Description',
    fieldName: 'Description',
    type: 'text',
    sortable: true
}
];
@track columns1 = [{
    label: 'Name',
    fieldName: 'Name',
    type: 'text',
    sortable: true
},
{
    label: 'Account Name',
    fieldName: 'AccountId',
    type: 'text',
    sortable: true
},
{
    label: 'Stage',
    fieldName: 'StageName',
    type: 'picklist',
    sortable: true
},
{
    label: 'Closed Date',
    fieldName: 'CloseDate',
    type: 'Date',
    sortable: true
},
{
    label: 'Description',
    fieldName: 'Description',
    type: 'text',
    sortable: true
}
];
@track multiple = true;
@track accounts ;
@wire(getAccountData) wrapperList;

        

}