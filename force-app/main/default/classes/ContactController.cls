public with sharing class ContactController {
    @AuraEnabled
     public static Contact insertData(Contact con){
        // System.debug([Select FirstName,LastName,Email From Contact WITH SECURITY_ENFORCED]);
        // return [Select FirstName,LastName,Email From Contact WITH SECURITY_ENFORCED];
        // con.AccountId = acId;
         upsert con;
         return con;
    }
    @AuraEnabled
    public static List<Contact> getContacts()
    {
        return [Select Account.Name,FirstName,LastName,Email From Contact];
    }

    @AuraEnabled
    public static boolean getDeleteContacts(Id did)
    {
        Contact c = [Select id From Contact where Id =: did];
        Delete c;
        return true;
    }
}