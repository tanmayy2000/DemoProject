public with sharing class accountRecordClass {
    @AuraEnabled
    public static Account getAccount( Account accountRecord) {
        accountRecord.numberOfEmployees = Integer.valueOf(accountRecord.numberOfEmployees);
    
    insert accountRecord;
    return accountRecord;
    }
}