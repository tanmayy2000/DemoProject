public with sharing class ContactCasesOnAccount1 {
    @auraEnabled(Cacheable=true)
    public static List<Case> editCases(String accId)
    {
     
        return [ SELECT AccountId, Id, Status, Origin, Priority FROM Case WHERE AccountId = :accId];
    }
    @AuraEnabled 
    public static List<Case> updateCases(List<Case> csList) {
        update csList;
        return csList;
    }
}
