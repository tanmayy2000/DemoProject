public class AccountHandler2 {
    public static list<string> ascOrder_AccountName()
    {
        list<Account> accList = [select Name from Account order by Name limit 2];
        list<string> str = new list<string>();
        for(Account a: accList){
            str.add(a.Name);
        }
        
        return str;
    }
}