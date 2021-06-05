public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [
            SELECT Name,Phone
            FROM Account
            limit 100
        ];
        // throw new AuraHandledException('Forced error');
    }
    @AuraEnabled
    public static Boolean deleteAccount(String acc) {
        Account a = [select id,Name from Account where id =: acc];
        delete a;
        return true;
    }

    @AuraEnabled
    public static Account createAccount(Account acc) {
        upsert acc;
        return acc;
    }
}