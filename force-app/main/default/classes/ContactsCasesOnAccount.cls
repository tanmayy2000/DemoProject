public with sharing class ContactsCasesOnAccount {
        @auraEnabled
        public static List<Contact> editContact(String accId)
        {
         
            return [ SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email FROM Contact WHERE AccountId = :accId];
        }
           
        @AuraEnabled 
        public static List<Contact> updateContacts(List<Contact> conList) {
            update conList;
            return conList;
        }
      
}
