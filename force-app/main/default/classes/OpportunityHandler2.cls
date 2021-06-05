public class OpportunityHandler2 {
    public static list<Database.SaveResult> update_Opportunity()
    {
        list<Opportunity> oppList= [select id,Name,StageName,CloseDate from Opportunity limit 10];
        list<Opportunity> oppListupdate= [select id,Name,StageName,CloseDate from Opportunity limit 10];
        for(Opportunity op:oppList)
        {
            op.id = op.id;
            op.Name = op.Name+'F';
            oppListupdate.add(op);
        }
        return database.update(oppListupdate);
    }
}