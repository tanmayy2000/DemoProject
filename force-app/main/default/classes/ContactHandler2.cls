public class ContactHandler2 {
    public static list<Database.DeleteResult> Delete_Contact(string lastname)
    {
        list<Account> accList = [select id from Account limit 10];
        list<Contact> conList = new list<Contact>();
        for(Account ac:accList)
        {
            Contact con = new Contact();
            con.LastName = lastname;
            con.AccountId = ac.id;
            conList.add(con);
        }
        
        insert conList;
        
        list<Contact> conDel = [select id,AccountId from Contact where Account.Name like '%a%' limit 10];
        
        return database.delete(conDel,false);
    }
}