public with sharing class ContactControllerGroupBy {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String searchKey) {
        String query = 'SELECT Id, FirstName,LastName,AccountId,Phone,Email FROM Contact';
        system.debug('query---'+query);
        if ( searchKey != null && searchKey != '' ) {
            String key = '%' + searchKey + '%';
            query += ' WHERE FirstName LIKE :key';
        }
        return Database.query( query );
        }
        @AuraEnabled
    public static void deleteContacts(list<Id> lstConIds){
        try {
            list<Contact> lstConsToDelete = new list<Contact>();
            System.debug('lstConIds ====> '+lstConIds);
            for(Id idCon : lstConIds) {
                lstConsToDelete.add(new Contact(Id = idCon));
            }
            if(!lstConsToDelete.isEmpty()) {
                delete lstConsToDelete;
            }
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    } 
}

