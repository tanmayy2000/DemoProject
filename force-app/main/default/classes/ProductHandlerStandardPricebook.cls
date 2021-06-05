public with sharing class ProductHandlerStandardPricebook {
    @AuraEnabled(Cacheable=true)
 
    public static String ProductHandlerStandardPricebook() {
        String PricebookId = [SELECT Id FROM Pricebook2 WHERE IsStandard= true][0].Id;
        return PricebookId;
    }
}    
