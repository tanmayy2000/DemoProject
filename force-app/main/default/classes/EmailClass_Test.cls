@isTest
public class EmailClass_Test {
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
        
        list<User> us = [select id,email from User where name='Tanmay Kumawat' limit 1];
        
        list<Contact> conList = new list<Contact>();
        for(integer i=0; i<2; i++)
        {
            Contact c = new Contact();
            c.LastName = 'Lastname'+i;
            c.Email = us[0].email;
            c.AccountId = accList[0].id;
            conList.add(c);
        }
        insert conList;
    }
    
    @isTest static void EmailClassTest()
    {
        system.assertEquals(EmailClass.conEmail(),new list<string>{'Lastname0'});
    }
}