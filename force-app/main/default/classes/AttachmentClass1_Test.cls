@isTest
public class AttachmentClass1_Test {
    @testSetup static void setup()
    {
        list<Account> accList = new list<Account>();
        for(integer i=0; i<2; i++)
        {
            Account acc = new Account();
            acc.Name= 'Acc'+i;
            acc.Working_in__c = 'ASIA';
            accList.add(acc);
        }
        insert accList;
        
        list<Contact> con = new list<Contact>();
        for(Account a:accList)
        {
            Contact co = new Contact(LastName = 'Last', AccountId = a.id);
            con.add(co);
        }
        
        insert con;
        
        list<Attachment> attList = new list<Attachment>();
        for(Account ac: accList)
        {
            string pdf = 'this is pdf';
            Attachment att = new Attachment();
            att.Name = 'Att';
            att.ParentId = ac.id;
            att.Body = blob.toPdf(pdf);
            attList.add(att);
        }
        insert attList;
        
        
        Pricebook2 pbnew = new Pricebook2(id = test.getStandardPricebookId());
        update pbnew;
        
        Product2 prod = new Product2(Name = 'Product', Family = 'pro');
        insert prod;
        
        list<Opportunity> oppList = new list<Opportunity>();
        Opportunity opp1 = new Opportunity(Name = 'ManavOpp' , StageName = 'Closed Won', CloseDate = date.today().addDays(14), AccountID = accList[0].id);
        Opportunity opp2 = new Opportunity(Name = 'ManavOpp' , StageName = 'Closed Won', CloseDate = date.today().addDays(14), AccountID = accList[1].id);
        oppList.add(opp1);
        oppList.add(opp2);
        insert oppList;
    }
    
    @isTest public static void AttachmentClass1Test()
    {
        Test.startTest();
        Database.SaveResult[] res = AttachmentClass1.getAccount();
        Test.stopTest();
        
        for(Database.SaveResult re:res)
        {
            system.assert(re.isSuccess());
        }
    }
}