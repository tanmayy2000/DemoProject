public with sharing class PricebookEntryController {
    @AuraEnabled
     public static PricebookEntry insertData(PricebookEntry pricebookentry){
       
         upsert pricebookentry;
         return pricebookentry;
    }
    @AuraEnabled
    public static List<PricebookEntry> getPricebookEntry()
    {
        return [Select Product2Id,Pricebook2Id,UnitPrice From PricebookEntry];
    }

    @AuraEnabled
    public static boolean getDeletePricebookEntry(Id gdp)
    {
        PricebookEntry pricebookenrty = [Select id From PricebookEntry where Id =: gdp];
        Delete pricebookenrty;
        return true;
    }
}
