public class LeadHandler1 {
    public static list<string> Lead_Name()
    {
        list<string> str = new list<string>();
        List<lead> lList=[select Id, Name,CreatedDate from lead  WHERE Records__c includes('Seller;Tenant') limit 10];
        for(Lead l:lList)
        {
            if(l.CreatedDate.year()==Date.today().year())
            {
                str.add(l.Name);
            }
        }
        return str;
    }
}