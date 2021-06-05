public with sharing class CasesContactsOnAccountController {
        @auraEnabled(cacheable = true)
        public static List<WrapperClass> contactsAndCases(){
            List<WrapperClass> wcList = new List<WrapperClass>();
            Map<Id,List<Contact>> accountIdVSContactListMap = new Map<Id,List<Contact>>();
            Map<Id,List<Case>> accountIdVSCaseListMap = new Map<Id,List<Case>>();
            List<Account> accList = [SELECT Id,Name FROM Account];
            List<Contact> conList =[SELECT LastName,AccountId,Phone,Email,Description FROM Contact WHERE AccountId IN:accList];
            List<Case> csList =[SELECT Origin,AccountId,Priority,Status FROM Case WHERE AccountId IN:accList];
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
            {   List<Case> caseList = new List<Case>();
                for(Case cs:csList)
                {
                    if(acc.Id == cs.AccountId)
                    {
                        caseList.add(cs);
                    }
                }
                accountIdVSCaseListMap.put(acc.Id,caseList);
            }
            for(Account ac:accList)
            { 
                WrapperClass wrc = new WrapperClass();
                wrc.acc = ac;
                wrc.conList = accountIdVSContactListMap.get(ac.Id);
                wrc.csList = accountIdVSCaseListMap.get(ac.Id);
                wcList.add(wrc);
            }
            return wcList;
        }
        public with sharing class WrapperClass {
          @AuraEnabled public Account acc;
          @AuraEnabled public List<Contact> conList;
          @AuraEnabled public List<Case> csList;
          
          }
    
}
