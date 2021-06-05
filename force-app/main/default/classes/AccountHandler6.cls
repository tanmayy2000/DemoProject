public class AccountHandler6 {
    public static list<string> AccountHavingOpp()
    {
        list<string> str = new list<string>();
        AggregateResult[] agg = [select AccountId from Opportunity where StageName = 'CLOSED WON' and (CloseDate <= THIS_MONTH) group by AccountId having count(AccountId)>0];
        system.debug(agg);
        list<id> lid = new list<id>();
        for(AggregateResult a:agg){
            lid.add((id)a.get('AccountId'));
        }
        list<Account> acc = [select id,name from Account where id in: lid];
        for(Account a:acc){
            str.add(a.Name);
        }
        return str;
    }
}