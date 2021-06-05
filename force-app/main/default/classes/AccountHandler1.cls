public class AccountHandler1 {
    public static list<Database.SaveResult> Insert_Account( string name, string description, integer emp)
    {
        list<Account> accList = new list<Account>();
        for(integer i=0; i<10 ; i++)
        {
            Account acc = new Account();
            acc.Name =  name+i;
            acc.Description = description;
            acc.NumberOfEmployees = emp+i;
            acc.AnnualRevenue = 14+i;
            acc.Site = 'Google';
            accList.add(acc);
        }
        
        return Database.insert(accList,false);
    }
}