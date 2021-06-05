public with sharing class PricebookController {
    @AuraEnabled
     public static Pricebook2 insertData(Pricebook2 pricebook){
       
         upsert pricebook;
         return pricebook;
    }
    @AuraEnabled
    public static List<Pricebook2> getPricebook()
    {
        return [Select Name,Description,IsActive From Pricebook2];
    }

    @AuraEnabled
    public static boolean getDeletePricebook(Id gdp)
    {
        Pricebook2 pricebook = [Select id From Pricebook2 where Id =: gdp];
        Delete pricebook;
        return true;
    }
}
