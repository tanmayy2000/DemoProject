@isTest
public class CaseHandler1_Test {
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
        
        list<Contact> conList = new list<Contact>();
        for(Account ac:accList)
        {
            Contact con = new Contact();
            con.LastName = 'lastname';
            con.AccountId = ac.id;
            conList.add(con);
        }
        insert conList;
    }
    
    
    @isTest public static void CaseHandler1Test()
    {
        Test.startTest();
        Database.SaveResult[] res = CaseHandler1.Insert_Case();
        Test.stopTest();
        
        for(Database.SaveResult re: res)
        {
            system.assert(re.isSuccess());
        }
    }
}