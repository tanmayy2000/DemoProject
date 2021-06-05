public class OpportunityHandler1 {
    public static list<Database.SaveResult> Insert_Opportunity(integer n,string name, string stage, date dattte)
    {   
        Account acc = [select id from Account limit 1];
        PriceBook2 pb = [select id from Pricebook2 where isStandard= true];
        list<Opportunity> oppList= new list<Opportunity>();
        for(integer i=0;i<n;i++)
        {
            Opportunity opp=new Opportunity();
            opp.CloseDate= dattte;
            opp.StageName= stage;
            opp.Name= name+i;
            opp.AccountId = acc.Id;
            opp.Pricebook2Id = pb.Id;
            
            oppList.add(opp);
        }
        return Database.insert(oppList,false);
    }
}