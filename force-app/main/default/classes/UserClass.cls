public class UserClass {
    public static list<string> UNaming()
    {
        list<string> str = new list<string>();
        AggregateResult[] agg = [select OwnerId from Lead where CreatedDate>=:date.newInstance(2021,01,01) and CreatedDate<=:date.newInstance(2021,12,31) group by OwnerId having count(OwnerId)>0];
        list<id> lid = new list<id>();
        for(AggregateResult a:agg){
            lid.add((id)a.get('OwnerId'));
        }
        
        list<user> u = [select id,name from user where id in: lid limit 1];
        for(User us : u)
        {
            str.add(us.Name);
        }
        
        return str;
    }
}