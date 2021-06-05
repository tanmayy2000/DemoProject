public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(Integer num,String lastName) {
        List<Contact> contactList = new List<Contact>();
        for(integer i =1;i<=num;i++){
            Contact con = new Contact(FirstName = 'Test'+i, LastName = lastName);
            contactList.add(con);
        }
        return contactList;
    }
}
