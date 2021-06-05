public with sharing class sObjectsAndFieldsList {
    @AuraEnabled(cacheable=true)
    public static List<String> sObjectList(){
        Map <String,Schema.SObjectType> gd = Schema.getGlobalDescribe();
        //System.debug(gd);
        List<String> sObjectAPInames=new List<String>();
        for(String s : gd.keySet()){
            sObjectAPInames.add(String.valueOf(gd.get(s)));
        }
        sObjectAPInames.sort();
        System.debug(sObjectAPInames);
        return sObjectAPInames;        
    }
    
    @AuraEnabled(cacheable=true)
    public static List<String> sObjectFieldsList(String objectName){
        SObjectType objectType = Schema.getGlobalDescribe().get(objectName);
        Map<String,Schema.SObjectField> mfields = objectType.getDescribe().fields.getMap();
        List<String> sObjectFieldsList = new List<String>();
        for(String s : mfields.keySet()){
        sObjectFieldsList.add(String.valueOf(mfields.get(s)));
        }
        sObjectFieldsList.sort();
        System.debug(sObjectFieldsList);
        return sObjectFieldsList;
    }
   
    @AuraEnabled(cacheable=true)
    public static List<sObject> fetchRecords(String objectName, List<String> fieldsList) {
        try {
            if(String.isNotBlank(objectName) && fieldsList != null){
                String query = 'SELECT id, ' + String.join(fieldsList, ',') + ' FROM '+objectName + ' LIMIT 500';
                return Database.query(query);
            }
            return null;
        } catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }    
    }
    @AuraEnabled(cacheable=true)
    public static List<sObject> getRecords(String objectName,List<String> selectedFields,String searchKey,String sortBy, String sortDirection){
    String s = '';
    Integer i = 0;

    for(String field : selectedFields){
    if(i == 0){
    s+= field;
    }else{
    s+= ','+field;
    }
    i++;

    }
    String qry = 'SELECT ' + s + ' FROM '+ objectName;

    if ( searchKey != null && searchKey != '' ) {
    String key = searchKey + '%';
    qry += ' WHERE Name LIKE : key';
    }

    if ( sortBy != null && sortDirection != null ) {
    qry += ' ORDER BY ' + sortBy + ' ' + sortDirection;
    }

    return Database.query(qry);
    }
    }