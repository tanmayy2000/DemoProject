public with sharing class accountRelatedObjectClass {
    @AuraEnabled(cacheable=true)
    public static List<ContactOpportunityWrapper> retrieveRelatedObjectData(String keySearch){       

        List<ContactOpportunityWrapper> coWrapperList = new List<ContactOpportunityWrapper>();
        List<Account> accList = [SELECT Id, Name, BillingState, Website, Phone FROM Account LIMIT 5];
        
        if(!accList.isEmpty()){
            for(Account acc:accList){
                ContactOpportunityWrapper conOppWrapper = new ContactOpportunityWrapper();
                conOppWrapper.accRecord = acc;
                conOppWrapper.contactList = acc.Contacts;
                conOppWrapper.opportunityList = acc.Opportunities;

                coWrapperList.add(conOppWrapper);
            }
        }
        System.debug(coWrapperList);
        return coWrapperList;

    }
    public class ContactOpportunityWrapper{
        @AuraEnabled
        public Account accRecord{get;set;}
        @AuraEnabled
        public List<Contact> contactList{get;set;}
        @AuraEnabled
        public List<Opportunity> opportunityList{get;set;}
    }
}


