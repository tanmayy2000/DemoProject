@isTest
public class TestRestrictContactByName {
    @isTest static void test1() {
        
        Contact con = new Contact(LastName='INVALIDNAME');
        Database.SaveResult res = Database.insert(con,false);
        System.assertEquals('Last Name "INVALIDNAME" is not allowed for DML',res.getErrors()[0].getMessage());
    }
}