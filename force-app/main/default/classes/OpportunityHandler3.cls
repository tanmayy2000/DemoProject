public class OpportunityHandler3 {
    public static decimal TotalQuantity()
    {
        decimal count=0;
        list<Account> alist=[Select id from Account Where Working_in__c=: 'ASIA' limit 100];
        
        list <Opportunity> olist=[Select id,Name,TotalOpportunityQuantity from Opportunity Where StageName=:'CLOSED WON' and AccountId in:alist] ;
        for(opportunity o:olist)
        {
            Count += o.TotalOpportunityQuantity;
        }
        
        return count;
        
    }
}