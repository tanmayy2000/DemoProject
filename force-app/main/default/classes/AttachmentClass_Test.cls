@isTest
public class AttachmentClass_Test {
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
    }
    
    @isTest public static void AttachmentClassTest()
    {
        Test.startTest();
        Database.SaveResult[] res = AttachmentClass.Insert_Att_Contact();
        Test.stopTest();
        
        for(Database.SaveResult re:res)
        {
            system.assert(re.isSuccess());
        }
    }
}