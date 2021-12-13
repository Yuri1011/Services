public with sharing class CategoryController {

    @AuraEnabled(cacheable=true)

    public static List<Category__c> getCategories() {
        return [SELECT Id, Name, (SELECT Id, Name FROM Specializations__r) FROM Category__c];
    }
}