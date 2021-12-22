import { LightningElement, api, track } from 'lwc';
import getSpecialists from '@salesforce/apex/SpecialistController.getSpecialists';

export default class Specialist extends LightningElement {
    @api categories;
    @api specializationTitle;
    @api specialistsForSpecialization;
    @api specialistsName;
    specialists;

    

    connectedCallback() {
        getSpecialists()
        .then((result) => {
            this.specialists = result;
            this.selectingSpecialistsByName();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    selectingSpecialistsByName() {
        let array = new Array();
        this.specialists.forEach(el => {
            if (el.Specialization__r.Name === this.specializationTitle) {
                array.push({
                  'id':el.Id,
                  'lastName':el.Last_Name__c,
                  'firstName':el.First_Name__c
              })
            }
        });
        this.specialistsForSpecialization = array;
    }

    showPopupWindowProfile(event) {
        let togglePopupWindowProfile = true;
        let specialistId = event.target.id;


        let detailsForParentCompApp = {
            toggle: togglePopupWindowProfile,
            id: specialistId
        }

        const selectedEvent = new CustomEvent("geteventdetailpopupwindowprofile", {
            detail: detailsForParentCompApp,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(selectedEvent);
    }
}