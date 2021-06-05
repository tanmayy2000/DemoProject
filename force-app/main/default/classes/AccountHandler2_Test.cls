@isTest
public class AccountHandler2_Test {
    
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
    
    @isTest public static void AccountHandler2Test()
    {
        system.assertEquals(AccountHandler2.ascOrder_AccountName(), new list<String>{'Acc0', 'Acc1'} );
    }
}