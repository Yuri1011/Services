public with sharing class ModalPopupController {

    @AuraEnabled(cacheable = true)
    public static List<Specialist__c> getNamesSpecialists(String specialistId) {
        String id = specialistId;
        try {
           return [
                    SELECT Id, Last_Name__c, First_Name__c 
                    FROM Specialist__c 
                    WHERE Id =: id];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
