public class ProductHandler2 {
    public static list<string> Product_Containing_a()
    {
        list<Product2> pro = [select Name from Product2 where Description like '%s%' order by Name limit 2];
        system.debug(pro);
        list<string> str = new list<string>();
        for(Product2 p: pro){
            str.add(p.Name);
        }
        
        
        return str;
        
    }
}