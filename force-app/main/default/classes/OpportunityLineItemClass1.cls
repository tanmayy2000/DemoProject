public class OpportunityLineItemClass1 {
    public static list<String> Oli_in_opp()
    {
        
        list<string> str = new list<String>();
        list<OpportunityLineItem> ollist = [select id,OpportunityId,Quantity from OpportunityLineItem where Quantity > 102 limit 1000];
        
        list<id> lid1 = new list<id>();
        for(OpportunityLineItem o:ollist){
            lid1.add(o.OpportunityId);
        }
        
        list<Opportunity> oplist=[Select AccountId from Opportunity where id in: lid1 and StageName =:'CLOSED WON'];
        
        list<id> lid2 = new list<id>();
        for(Opportunity op:oplist){
            lid2.add(op.AccountId);
        }
        
        list<Account> alist=[Select id,Name from Account Where id in: lid2];
        
        for(Account a:alist)
        {
            str.add(a.Name);
        }
        
        return str;
        
    }
}