public class LeadHandler2 {
    public static list<Database.SaveResult> Insert_Lead()
    {
        list<Lead> llist=new list<lead>();
        for(integer i=0;i<3;i++)
        {
            Lead l=new Lead();
            l.Email='fc@gmail.com'+i;
            l.FirstName='assh'+i;
            l.LastName='bani'+i;
            l.Company='SA_';
            llist.add(l);
        }
        insert llist; 
        
        list<Product2> plist=new list<Product2>();  
        for(Lead l:llist)
        {
            for(integer i=0;i<5;i++)
            {
                Product2 p=new Product2();
                p.Lead__c = l.id;
                p.ProductCode='1334';
                p.Name='pname';
                plist.add(p);
                
            }
        }
        return Database.insert(plist, false); 
        
    }
}