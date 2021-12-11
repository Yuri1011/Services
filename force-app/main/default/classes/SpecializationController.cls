public with sharing class SpecializationController {
    
    @AuraEnabled(cacheable=true)
    public static List<Specialization__c> getSpecializatios() {
        return [SELECT Id, Name FROM Specialization__c];
    }
}
