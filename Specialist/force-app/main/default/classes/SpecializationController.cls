public with sharing class SpecializationController {

    @AuraEnabled(cacheable=true)
    public static List<Category__c> getCategories() {
        return [SELECT Id, Name FROM Category__c];
    }
}
