public class PricebookProductHandler1 {
    public static list<Database.SaveResult> Insert_Pricebook()
    {
        Pricebook2 price = new Pricebook2();
        price.Name = 'Algo Pricebook';
        insert price;
        
        list<Product2> prod = new list<Product2>();
        for(integer i=1;i<=10;i++){
            Product2 pro = new Product2();
            pro.Name = 'Product '+i;
            prod.add(pro);
        }
        
        insert prod;
        
        Pricebook2 res = [select id from Pricebook2 where isStandard =: true];
        id prore = res.id;
        
        list<PricebookEntry> pe = new list<PricebookEntry>();
        for(Product2 pro: prod){
            pricebookentry priceentry2=new pricebookentry(Pricebook2Id=price.id,Product2Id=pro.id,UnitPrice=3);//custom
            pe.add(priceentry2);  
        }
        
        return Database.insert(pe, false);
    }
}