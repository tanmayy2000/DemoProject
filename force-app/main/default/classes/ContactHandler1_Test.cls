@isTest
public class ContactHandler1_Test {
    @testsetup static void setup()
    {
        list<Account> accList = new list<Account>();
        for(integer i=0; i<10 ; i++)
        {
            Account acc = new Account();
            acc.Name =  'Acc'+i;
            acc.Phone  = '0000000000';
            acc.Allow_Multiple__c = true;
            accList.add(acc);
        }
        insert accList;
    }
    
    @isTest public static void ContactHandler1Test()
    {
        Test.startTest();
        DataBase.SaveResult[] res = ContactHandler1.Insert_Contact('LastName');
        Test.stopTest();
        
        for(DataBase.SaveResult re: res)
        {
            system.assert(re.isSuccess());
        }
    }
}