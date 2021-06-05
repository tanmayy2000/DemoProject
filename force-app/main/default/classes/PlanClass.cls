public class PlanClass {
    public static decimal PlanHour()
    {
        decimal hrs=0;
        list<Plan__C> plist=[Select id,Travel_Hours__c,Travel_Location__c from Plan__c Where Travel_Location__c includes('%;A;%') or Travel_Location__c includes('%;F;%')];
        for(Plan__c p:Plist)
        {
            hrs=hrs + p.Travel_Hours__c;
        }
        
        return hrs;

    }
}