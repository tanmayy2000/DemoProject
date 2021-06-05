@isTest
public class OpportunityLineItemClass2_Test {
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
        
        list<OpportunityLineItem> oliList = new list<OpportunityLineItem>();
        OpportunityLineItem oli1 = new OpportunityLineItem(OpportunityId = op.id, Product2Id = prod.Id, Quantity = 104, UnitPrice = 149329, PricebookEntryId = customPrice.id);
        OpportunityLineItem oli2 = new OpportunityLineItem(OpportunityId = op.id, Product2Id = prod.Id, Quantity = 104, UnitPrice = 149329, PricebookEntryId = customPrice.id);
        OpportunityLineItem oli3 = new OpportunityLineItem(OpportunityId = op.id, Product2Id = prod.Id, Quantity = 104, UnitPrice = 149329, PricebookEntryId = customPrice.id);
        oliList.add(oli1);
        oliList.add(oli2);
        oliList.add(oli3);
        insert oliList;
    }
    
    @isTest static void OpportunityLineItemClass2Test()
    {
        system.assertEquals(OpportunityLineItemClass2.OliMoreThanTwo(),new list<String>{'TestAccount'});
    }
}