public class EmailClass2 {
    
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
    
    public static boolean putOPP()
    {
        boolean bl;

        list<Opportunity> oplist=[Select id,name,AccountId,CloseDate from Opportunity Where CloseDate = NEXT_N_DAYS:10 limit 100];

        list<id> mlist = new list<id>();
        for(Opportunity o: oplist){
            mlist.add(o.AccountId);
        }
        list<Contact> clist=[Select id,Email from Contact Where AccountId in:mlist and Email !=''];

        String[] s = New List<String>();
        For(Contact c : clist){
            s.add(c.Email);
        }
        if(s.size()>0){
            bl =  email(s);
        }
        
        return bl;
        
    }
}