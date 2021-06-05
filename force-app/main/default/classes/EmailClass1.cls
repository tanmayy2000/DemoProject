public class EmailClass1 {
    public static boolean email(list<string> str)
    {
        messaging.SingleEmailMessage email1=new messaging.SingleEmailMessage();
        email1.setToAddresses(str);
        email1.setSubject('sending mail by Script');
        email1.setPlainTextBody('Hello  !');
        email1.setSenderDisplayName('abc');
        messaging.Email[] emails = new messaging.Email[]{email1};
            messaging.sendEmail(emails);
        
        boolean bl = true;
        
        return bl;
    }
    
    public static boolean GetEmail()
    {
        boolean bl;
        AggregateResult[] agalist = [select OwnerId from Account where Phone != null group by OwnerId having count(OwnerId)>0 limit 1000];//100
        Set<Id> mlist = new Set<Id>();
        for(AggregateResult ap: agalist){
            mlist.add((Id)ap.get('OwnerId'));
        }
        
        AggregateResult[] agclist = [select OwnerId from Contact where Email != null and OwnerId in: mlist group by OwnerId having count(OwnerId)>1 limit 1000];//30
        
        Set<Id> nlist = new Set<Id>();
        for(AggregateResult ap: agclist){
            nlist.add((Id)ap.get('OwnerId'));
        }
        
        List<Contact> nclist = [Select Email From Contact where(OwnerId IN:nlist And Email != null)];
        
        String[] s = New List<String>();
        For(Contact c : nclist){
            s.add(c.Email);
        }
        if(s.size()>0){
            bl =  email(s);
        }
        
        return bl;
        
    }
}