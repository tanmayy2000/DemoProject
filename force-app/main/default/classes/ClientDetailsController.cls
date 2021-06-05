public with sharing class ClientDetailsController {
  

    @AuraEnabled
    public static Client_Detail__c createClientDetails(Client_Detail__c clientdetails) {
        upsert clientdetails;
        return clientdetails;
    }
    @AuraEnabled(cacheable=true)
    public static List<Client_Detail__c> getClientDetails() {
        return [
            SELECT Name,Phone__c,Address__c,Email__c,Fax__c,Gender__c
            FROM Client_Detail__c
            limit 100
        ];
        // throw new AuraHandledException('Forced error');
    }
    @AuraEnabled(cacheable=true)
    public static List<Bill_Detail__c> getBillDetails() {
        return [
            SELECT Name,Bill_Amount__c,Client_Detail__c
            FROM Bill_Detail__c
            limit 100
        ];
        // throw new AuraHandledException('Forced error');
    }
}
