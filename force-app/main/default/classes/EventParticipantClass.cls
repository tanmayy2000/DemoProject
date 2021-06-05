public class EventParticipantClass {
    public static list<Database.SaveResult> Insert_Participant()
    {
        Event__c eve = [select id from Event__c limit 1];
        list<Contact> con = [select id from Contact limit 10];
        id pore = eve.id;
        list<Event_Participant__c> evlist = new list<Event_Participant__c>();
        integer i=0;
        for(Contact c:con){
            Event_Participant__c ep = new Event_Participant__c();
            if(i>=0 && i<4)
            {
                ep.Name = 'Evenets Dhakitiki '+i;
                ep.Contact__c = c.id;
                ep.Event__c = pore;
                ep.Party__c = 'Presenter Contact';
                i++;
                evlist.add(ep);
            }
            else if(i>=4 && i<6){
                ep.Name = 'Evenets Dhakitiki '+i;
                ep.Contact__c = c.id;
                ep.Event__c = pore;
                ep.Party__c = 'Organizer Contact';
                i++;
                evlist.add(ep);
            }
            else if(i>=6 && i<10){
                ep.Name = 'Evenets Dhakitiki '+i;
                ep.Contact__c = c.id;
                ep.Event__c = pore;
                ep.Party__c = 'Organizer Contact';
                i++;
                evlist.add(ep);
            }
            
        }
        
        return Database.insert(evlist, false);
        
    }
}