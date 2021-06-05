@isTest public class ScriptTest {
    @isTest public static void script1()
    {
        list<Account> acc = Script.Account(20);
        Test.startTest();
        Database.SaveResult[] res = Database.insert(acc , false);
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
        
    }
    
    @isTest public static void script2()
    {
        list<Contact> acc = Script.Contact(10);
        Test.startTest();
        Database.SaveResult[] res = Database.insert(acc , false);
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
        
    }
    
    @isTest public static void script3()
    {
        list<Opportunity> opp = Script.Opportunity();
        Test.startTest();
        Database.SaveResult[] res = Database.insert(opp , false);
        Test.stopTest();
        
        for(Database.SaveResult re : res)
        {
            system.assert(re.isSuccess());
        }
        
    }
    
    @isTest public static void script4()
    {
        list<Contact> acc = Script.Contact_delete(10);
        Test.startTest();
        Database.DeleteResult[] res = Database.delete(acc , false);
        Test.stopTest();
        
        for(Database.DeleteResult re : res)
        {
            system.assert(re.isSuccess());
        }
        
    }
}