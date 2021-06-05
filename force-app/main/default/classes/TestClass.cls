public with sharing class TestClass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId) {
        return [ SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email FROM Contact WHERE AccountId = :accId];
    }


     @AuraEnabled 
public static List<Contact> updateContacts(List<Contact> conList) {
    update conList;
    return conList;
}}



