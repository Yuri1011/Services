public with sharing class SpecialistController {

    @AuraEnabled(cacheable=true)

    public static List<Specialist__c> getSpecialists() {
        return [SELECT Id, Last_Name__c, First_Name__c, Specialization__r.Name FROM Specialist__c];
    }
}
