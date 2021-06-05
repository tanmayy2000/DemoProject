public class UserDetail {
    public static list<string> User_details()
    {
        list<string> str = new list<string>();
        list<User> us = [select id,name,email,phone from User where id=:userinfo.getUserId() limit 10];
        for(User u: us)
        {
            str.add(u.name);
            str.add(u.Email);
            str.add(u.Phone);
        }
        
        return str;
    }
}