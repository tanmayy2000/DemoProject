public class AccountHandler5 {
    public static list<string> getAccount()
    {
        list<string> str = new list<string>();
        AggregateResult[] op1=[Select AccountId from Opportunity Where StageName='CLOSED WON' group by AccountId having count(AccountId)>0];
        list<id> acId=new List<id>();
        for(AggregateResult op:op1)
        {
            acId.add((ID)op.get('AccountId'));
        }
        list<Account> a1=[Select Name,Id from Account where Id  in:acId];
        for(Account a12:a1)
        {
            str.add(a12.Name);
        }
        
        return str;
    }
}