@isTest
public class LeadHandler1_Test {
    @testSetup static void setup()
    {
        list<lead> ld = new list<lead>();
        for(integer i=0; i<2; i++)
        {
            Lead ld1 = new Lead();
            ld1.Description = 'sdsdsa';
            ld1.LeadSource = 'Reserve';
            ld1.LastName = 'Lead'+i;
            ld1.Records__c = 'Sellers;Tenant';
            ld1.Company = 's&k';
            ld.add(ld1);
        }
        insert ld;
        
        pricebook2 pb = new pricebook2(id=test.getStandardPricebookId());
        update pb;
    }
    
    @isTest static void LeadHandler1Test()
    {
        system.assertEquals(LeadHandler1.Lead_Name(), new list<string>{'Lead0','Lead1'});
    }
}