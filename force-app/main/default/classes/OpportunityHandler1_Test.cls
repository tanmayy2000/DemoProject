@isTest
public class OpportunityHandler1_Test {
    @testSetup static void setup()
    {
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Account acc = new Account(Name='TestAccount', Working_in__c = 'ASIA');
        insert acc;
    }
    
    @isTest public static void OpportunityHandler1Test()
    {
        Test.startTest();
        Database.SaveResult[] res = OpportunityHandler1.Insert_Opportunity(3,'Opportunity', 'Closed Won', date.today().addDays(14));
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
    }
}