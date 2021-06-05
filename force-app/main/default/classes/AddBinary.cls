public class AddBinary {
    public static string addBinary(string a11, string b11)
    {
        String b1=a11,b2=b11;
        integer count=0;
        integer a=b1.length()-1;
        integer b=b2.length()-1;
        String result='';
        while (a>= 0 || b>=0 || count==1) 
        {
            
            count += (a>=0?Integer.valueOf(b1.subString(a,a+1)):0);
            count += (b>=0?Integer.valueOf(b2.subString(b,b+1)):0);
            result=String.valueOf((math.mod(count,2))+result);
            count=(count/2);
            a--;
            b--;
        }
        
        return result;
    }
}