public class FibonacciClass {
    public static list<integer> fibnocii()
    {
        list<integer> fib = new list<integer>();
        integer a=1;
        integer b=1;
        integer c;
        fib.add(a);
        fib.add(b);
        for(integer i=0;i<5;i++){
            c=a+b;
            a=b;
            b=c;
            fib.add(c);
        }
        
        return fib;
        
    }
}