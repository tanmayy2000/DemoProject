@isTest
public class PlanClass_Test {
    @testSetup static void setup()
    {
        list<plan__c> plan = new list<plan__c>();
        Plan__c p1 = new Plan__c(Name='Manali',Travel_Hours__c=50, Travel_location__c='A;B');
        Plan__c p2 = new Plan__c(Name='Manali',Travel_Hours__c=70, Travel_location__c='D;B');
        Plan__c p3 = new Plan__c(Name='Manali',Travel_Hours__c=20, Travel_location__c='F;B');
        plan.add(p1);
        plan.add(p2);
        plan.add(p3);
        insert plan;
    }
    
    @isTest static void PlanClassTest()
    {
        system.assertEquals(PlanClass.PlanHour(),70);
    }
}