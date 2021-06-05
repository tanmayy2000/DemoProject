public with sharing class testthree {
    @AuraEnabled
    public static List<Contact> getContacts(String accId) {
        return [ SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email FROM Contact WHERE AccountId = :accId];
    }
    
}

