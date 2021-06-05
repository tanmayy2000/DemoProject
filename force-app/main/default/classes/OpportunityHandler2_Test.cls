@isTest
public class OpportunityHandler2_Test {
    @testSetup static void setup()
    {
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Account acc = new Account(Name='TestAccount', Working_in__c = 'ASIA');
        insert acc;
        
        Opportunity opp = new Opportunity(Name = 'TanmayOpp' , StageName = 'Closed Won', CloseDate = date.today().addDays(14), AccountID = acc.id);
        insert opp;
        
    }
    
    @isTest public static void OpportunityHandler2Test()
    {
        Test.startTest();
        Database.SaveResult[] res = OpportunityHandler2.update_Opportunity();
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
    }
}