public class OpportunityLineItemClass2 {
    public static list<String> OliMoreThanTwo()
    {
        list<string> str = new list<string>();
        AggregateResult[] opList=[Select OpportunityId from OpportunityLineItem group by OpportunityId having count(OpportunityId)>2];
        List<ID> opList1=new List<ID>();
        for(AggregateResult ag:opList)
        {  
            oplist1.add((ID)ag.get('OpportunityId'));
        }
        list<Opportunity> op1=[Select AccountId,Name from Opportunity where id in:oplist1];
        list<id> acId=new List<id>();
        for(Opportunity op:op1){
            acId.add(op.AccountId);
        }
        list<Account> a1=[Select Name,Id from Account where Id  in:acId];
        for(Account a12:a1)
        {
            str.add(a12.Name);
        }
        
        return str;
        
    }
}