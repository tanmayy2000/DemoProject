public class AttachmentClass {
     public static list<Database.SaveResult> Insert_Att_Contact()
    {
        Attachment attList = [select Name,Body,ParentId from Attachment limit 1];
        list<Attachment> attList2 = new list<Attachment>();
        list<Contact> con = [select id from Contact where AccountId =: attList.ParentId limit 2];
        for(Contact c: con)
        {
            Attachment att = new Attachment();
            att.Name = attList.Name;
            att.ParentId = c.id;
            att.Body = attList.Body;
            attList2.add(att);
        }
        
        return Database.insert(attList2,false);
    }
}