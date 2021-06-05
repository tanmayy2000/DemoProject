public class ReverseNumber {
    public static Integer Reverse_Number(integer num)
    {
        integer num1 = num;
        integer num2;
        integer rev = 0;
        while(num1!=0){
            num2 = math.mod(num1, 10);
            rev = rev*10+num2;
            num1 = num1/10;
        }
        
        return rev;
    }
}