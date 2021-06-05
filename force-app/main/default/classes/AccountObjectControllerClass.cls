public with sharing class AccountObjectControllerClass {
  @auraEnabled(cacheable = true)
  public static List<WrapperClass> findContactByAccountId(){
      List<WrapperClass> wcList = new List<WrapperClass>();
      Map<Id,List<Contact>> accountIdVSContactListMap = new Map<Id,List<Contact>>();
      Map<Id,List<Opportunity>> accountIdVSOpportunityListMap = new Map<Id,List<Opportunity>>();
      List<Account> accList = [SELECT Id,Name FROM Account LIMIT 10];
      List<Contact> conList =[SELECT LastName,AccountId,Phone,Email,Description FROM Contact WHERE AccountId IN:accList];
      List<Opportunity> oppList =[SELECT Name,AccountId,StageName,CloseDate,Description FROM Opportunity WHERE AccountId IN:accList];
      for(Account acc:accList)
      {   List<Contact> contactList = new List<Contact>();
          for(contact con:conList)
          {
              if(acc.Id == con.AccountId)
              {
                 contactList.add(con);
                 
              }

          }
          accountIdVSContactListMap.put(acc.Id,contactList);
      }
      for(Account acc:accList)
      {   List<Opportunity> opportunityList = new List<Opportunity>();
          for(Opportunity opp:oppList)
          {
              if(acc.Id == opp.AccountId)
              {
                  opportunityList.add(opp);
              }
          }
          accountIdVSOpportunityListMap.put(acc.Id,opportunityList);
      }
      for(Account ac:accList)
      { 
          WrapperClass wrc = new WrapperClass();
          wrc.acc = ac;
          wrc.conList = accountIdVSContactListMap.get(ac.Id);
          wrc.oppList = accountIdVSOpportunityListMap.get(ac.Id);
          wcList.add(wrc);
      }
      return wcList;
  }
  public with sharing class WrapperClass {
    @AuraEnabled public Account acc;
    @AuraEnabled public List<Contact> conList;
    @AuraEnabled public List<Opportunity> oppList;
    
    }

    
}
