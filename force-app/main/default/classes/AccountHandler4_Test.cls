@isTest
public class AccountHandler4_Test {
    @testSetup static void setup()
    {
        list<Account> Acc = new list<Account>();
        for(integer i=0; i<5; i++)
        {
            Account ac = new Account();
            ac.Name = 'Acc'+i;
            ac.NumberOfEmployees = 12;
            ac.Working_in__c = 'ASIA';
            ac.Allow_Multiple__c = true;
        	Acc.add(ac);
        }
        
        insert Acc;
    }
    
    @isTest public static void AccountHandler4Test()
    {
        system.assertEquals(AccountHandler4.findAccountWorking(), 2);
    }
}