@isTest
public class AccountHandler3_Test {
    @testsetup static void setup()
    {
        list<Account> accList = new list<Account>();
        for(integer i=0; i<10 ; i++)
        {
            Account acc = new Account();
            acc.Name =  'Acc'+i;
            accList.add(acc);
        }
        insert accList;
    }
    
    @isTest public static void AccountHandler3()
    {
        system.assertEquals(AccountHandler3.Reverse_AccountName(), '0ccA' );
    }
}