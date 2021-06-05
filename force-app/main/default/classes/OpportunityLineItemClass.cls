public class OpportunityLineItemClass {
    public static Database.SaveResult Clone_oli()
    {
        opportunity opp = [select Id,Name,CloseDate,AccountId from opportunity limit 1];
        
        List<OpportunityLineItem> oli = [select Id,OpportunityId,PricebookEntryId,Product2Id,Quantity,TotalPrice from OpportunityLineItem where OpportunityId=: opp.Id];
        
        list<Opportunity> opplist = new list<Opportunity>();
        opportunity cloneopp = opp.clone();
        cloneopp.closeDate = opp.CloseDate.addDays(30);
        cloneopp.StageName = 'closeWon';
        cloneopp.Name = opp.Name+' Clone';
        cloneopp.AccountId = opp.AccountId;
        
        return Database.insert(cloneopp, false);
        
    }
}