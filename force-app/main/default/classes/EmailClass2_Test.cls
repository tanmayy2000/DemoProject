@isTest
public class EmailClass2_Test {
    @testsetup static void setup()
    {
        list<Account> accList = new list<Account>();
        for(integer i=0; i<10 ; i++)
        {
            Account acc = new Account();
            acc.Name =  'Acc'+i;
            acc.Phone  = '0000000000';
            acc.Working_in__c = 'ASIA';
            acc.Allow_Multiple__c = true;
            accList.add(acc);
        }
        insert accList;
        
        list<Contact> conlist = new list<Contact>();
        for(Integer i=0; i<5; i++)
        {
            Contact con = new Contact();
            con.LastName = 'Contact'+i;
            con.Email = 'shshs@gmail.com';
            con.AccountId = accList[i].id;
            conList.add(con);
        }
        
        insert conList;
        
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Product2 prod = new Product2(Name = 'Product', Family = 'pro');
        insert prod;
        
        Account acc = new Account(Name='TestAccount', Working_in__c = 'ASIA');
        insert acc;
        
        Opportunity opp = new Opportunity(Name = 'ManavOpp' , StageName = 'Closed Won', CloseDate = date.today().addDays(10), AccountID = accList[0].id);
        insert opp;
    }
    
    @isTest public static void EmailClass2Test()
    {
        system.assertEquals(EmailClass2.putOPP(), True);
    }
}