public class EmailClass {
    public static list<string> conEmail()
    {
        list<string> str = new list<string>();
        list<Contact> clist=[Select id,Lastname,Email from Contact where Email =:userinfo.getUserEmail() limit 1];
        for(Contact c :clist)
        {
            str.add(c.LastName);
        }
        return str;
    }
}