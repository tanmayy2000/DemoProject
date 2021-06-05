public class ContactHandler1 {
    public static list<Database.SaveResult> Insert_Contact(string lastname)
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
        
        
        return Database.insert(conList, false);
    }
}