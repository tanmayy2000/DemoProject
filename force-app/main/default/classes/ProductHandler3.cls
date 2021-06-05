public class ProductHandler3 {
    public static decimal Gandhi()
    {
        Decimal sum=0;
        list<Opportunity> oplist=[Select id from Opportunity Where StageName='CLOSED WON' limit 1000] ;
        system.debug(oplist);
        list<OpportunityLineItem> plist=[Select TotalPrice from OpportunityLineItem where Product2.Name ='Gandhiji Chasma' and OpportunityId in:oplist];
        System.debug(plist);
        for(OpportunityLineItem o:plist)
        {
            sum=sum+o.TotalPrice;
        }
        
        return sum;
        
    }
}