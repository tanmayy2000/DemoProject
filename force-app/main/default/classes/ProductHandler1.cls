public class ProductHandler1 {
    public static list<Database.SaveResult> Insert_Product( string name, string description, string family)
    {
        list<Product2> prolist= new list<Product2>();
        for(integer i=0;i<10;i++)
        {
            Product2 p=new Product2();
            p.Name = name+i;
            p.Description = description +i*2;
            p.Family = family +i+ family;
            proList.add(p);
            
        }
        
        return Database.insert(proList,false);
        
    }
}