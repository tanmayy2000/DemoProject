import { LightningElement,track,wire } from 'lwc';
import contactsAndCases from '@salesforce/apex/CasesContactsOnAccountController.contactsAndCases';

export default class CasesContactsOnAccount extends LightningElement {
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
    label: 'Origin',
    fieldName: 'origin',
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
    label: 'Status',
    fieldName: 'Status',
    type: 'picklist',
    sortable: true
},
];
@track multiple = true;
@track accounts ;
@wire(contactsAndCases) wrapperList;

        

}