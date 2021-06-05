public class CaseHandler1 {
    public static list<Database.SaveResult> Insert_Case()
    {
        List<Account> acc = [SELECT id, Name FROM Account limit 5];
        List<Contact> con = [SELECT id, Name,AccountId FROM Contact  Where AccountId=:acc limit 5]; 
        List<Case> cseList = new List<Case>();
        for(Contact c:con) {
            Case cs = new Case();
            cs.AccountId =  c.AccountId;
            cs.ContactId = c.id;
            cseList.add(cs);
        }
        
        return database.insert(cseList,false);
        
    }
}