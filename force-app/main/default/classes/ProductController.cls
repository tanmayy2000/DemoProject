public with sharing class ProductController {
    @AuraEnabled
    public static Product2 createProduct(Product2 prod) {
        insert prod;
        return prod;
    }
    @AuraEnabled
    public static Pricebook2 createPricebook(Pricebook2 pb) {
        insert pb;
        return pb;
    }
    @AuraEnabled
    public static PricebookEntry createPricebookEntry(PricebookEntry pbe) {
        insert pbe;
        return pbe;
    }
}
