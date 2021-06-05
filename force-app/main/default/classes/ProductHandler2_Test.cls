@isTest
public class ProductHandler2_Test {
    @testSetup static void setup() {
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Product2 prod = new Product2(Name = 'Gandhiji Chasma', Description = 'aaannnsddee' , Family = 'pro');
        insert prod;
    }
    
    @isTest public static void ProductHandler2Test()
    {
        system.assertEquals(ProductHandler2.Product_Containing_a(), new list<String>{'Gandhiji Chasma'} );
    }
}