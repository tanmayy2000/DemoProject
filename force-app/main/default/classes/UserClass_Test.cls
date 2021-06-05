@isTest
public class UserClass_Test {
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
    }
    
    @isTest static void UserClassTest()
    {
        system.assertEquals(UserClass.UNaming(),new list<string>{'Tanmay Kumawat'});
    }
}