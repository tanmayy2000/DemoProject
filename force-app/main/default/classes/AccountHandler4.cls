public class AccountHandler4 {
    public static Integer findAccountWorking()
    {
        List<Account> accList=[select Id,Name from Account WHERE Working_in__c = 'ASIA' or Working_in__c = 'NA' limit 2];
        integer sum =0;
        for(Account a: accList)
        {
            sum++;
        }
         return sum;
        
    }
}