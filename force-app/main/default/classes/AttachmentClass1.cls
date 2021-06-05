public class AttachmentClass1 {
    public static list<Database.SaveResult> getAccount()
    {
        list<Opportunity> opp = [select id,AccountID from Opportunity where AccountId != '' limit 10];
        list<id> lid = new list<id>();
        for(Opportunity o: opp){
            lid.add(o.AccountId);
        }
        
        list<Attachment> att = [select id,Name,Body,Description,ParentId from Attachment where ParentId in: lid ];
        
        list<Attachment> att2 = new list<Attachment>();
        for(Attachment at: att){
            for(Opportunity o1: opp)
            {
                if(o1.AccountId == at.ParentId)
                {
                    Attachment a = new Attachment();
                    a.Name = at.Name;
                    a.Body = at.Body;
                    a.Description = at.Description;
                    a.ParentId = o1.id;
                    att2.add(a);
                    system.debug(att2);
                }
            }    
        }
        set<id> se = new set<id>();
        for(Attachment a1: att){
            se.add(a1.parentId);
        }
        
        list<id> li = new list<id>(se);
        
        for(integer i=0 ; i<=opp.size()-1; i++)
        {
            for(integer j=0 ; j<li.size() ; j++){
                if(opp[i].AccountId == li[j]){
                    opp[i].StageName= 'CLOSED WON';
                }
                else{
                    opp[i].StageName = 'CLOSED LOSS';
                }
                
            }
        }
        insert att2;
        return Database.update(opp, false);
        
    }
}