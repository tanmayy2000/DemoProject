@isTest
public class UserDetail_Test {
    @testSetup static void setup()
    {
        list<User> user = [select id,Name,Phone,Email from User limit 10];
    }
    
    
    @isTest static void UserDetailTest()
    {
        system.assertEquals(UserDetail.User_details(),new list<string>{'Tanmay Kumawat','kumawat.tanmay@cloudanalogy.com',null});
    }
}