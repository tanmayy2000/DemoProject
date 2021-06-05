@isTest
public class EventParticipantClass_Test {
    @testSetup static void setup()
    {
        list<Event__c> eplist=new list<Event__c>();
        for(integer i=0;i<=2;i++)
        {
            Event__c e=new Event__c();
            e.Name='System'+i;
            e.Event_Date__c=System.today();
            eplist.add(e);
        }
        insert eplist;
        
        Account acc = new Account(Name='Acc');
        insert acc;
        
        list<Contact> conList = new list<Contact>();
        for(integer i=0; i<10; i++)
        {
            Contact con= new Contact();
            con.LastName = 'Con'+i;
            con.AccountId = acc.id;
            conList.add(con);
        }
        
        
        insert conList;
    }
    
    
    @isTest static void EventParticipantClassTest()
    {
        Test.startTest();
        Database.SaveResult[] res = EventParticipantClass.Insert_Participant();
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
    }
}