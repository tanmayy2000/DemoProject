@isTest
public class PricebookProductHandler1_Test {
    @testSetup static void setup()
    {
        Pricebook2 res = new Pricebook2(id=test.getStandardPricebookId());
        update res;
    }
    
    @isTest static void PricebookProductHandler1Test()
    {
        Test.startTest();
        Database.SaveResult[] res = PricebookProductHandler1.Insert_Pricebook();
        Test.stopTest();
        
        for(Database.SaveResult re:res)
        {
            system.assert(re.isSuccess());
        }
    }
}