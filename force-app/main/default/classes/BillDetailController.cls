public with sharing class BillDetailController {
    @AuraEnabled
     public static Bill_Detail__c insertData(Bill_Detail__c billdetails){
         upsert billdetails;
         return billdetails;
    }
}