public class AccountHandler3 {
    public static string Reverse_AccountName()
    {
        list<Account> accList = [select Name From Account limit 1];
        string str='';
        for(Account a: accList){
            string aaa = a.Name;
            for(integer i=aaa.length()-1;i>=0;i--){
                str += aaa.substring(i,i+1);
            }
        }
        
        return str;
    }
}