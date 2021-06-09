public with sharing class CompanyController {
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getEmployees(String searchKey) {
        String query = 'SELECT Id, Name,Address__c,Company__c,Email__c,EmployeeId__c,Phone__c FROM Employee__c';
        system.debug('query---'+query);
        if ( searchKey != null && searchKey != '' ) {
            String key = '%' + searchKey + '%';
            query += ' WHERE Name LIKE :key';
        }
        return Database.query( query );
    }
}
