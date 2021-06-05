@isTest
public class ProductHandler1_Test {
    @testSetup static void setup() 
    {
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;  
    }
    
    @isTest public static void ProductHandler1Test()
    {
        Test.startTest();
        Database.SaveResult[] res = ProductHandler1.Insert_Product( 'Product', 'Dessssssa', 'family');
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
    }
}