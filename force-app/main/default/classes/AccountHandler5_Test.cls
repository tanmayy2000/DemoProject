@isTest
public class AccountHandler5_Test {
     @testSetup static void setup()
    {
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Product2 prod = new Product2(Name = 'Product', Family = 'pro');
        insert prod;
        
        Pricebook2 customPB = new Pricebook2(Name='ASIA', isActive=true);
        insert customPB;
        
        PricebookEntry customPrice = new PricebookEntry(Pricebook2Id = customPB.Id, Product2Id = prod.Id, UnitPrice = 12000, IsActive = true);
        insert customPrice;
        
        Account acc = new Account(Name='TestAccount', Working_in__c = 'ASIA');
        insert acc;
        
        Opportunity op=new Opportunity(Name='op1',AccountId=acc.Id, CloseDate=Date.Today(), StageName='Closed Won', Pricebook2Id=customPB.Id);
        insert op;
    }
    
    @isTest static void AccountHandler5Test()
    {
        system.assertEquals(AccountHandler5.getAccount(),new list<String>{'TestAccount'});
    }
}