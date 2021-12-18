import { LightningElement, api, track } from 'lwc';
import getSpecialists from '@salesforce/apex/SpecialistController.getSpecialists';

export default class Specialist extends LightningElement {
    @api categories;
    @api specializationTitle;
    @api specialistsForSpecialization;
    specialists;
    @api togglePopupWindowProfile;
    @api specialistsName;

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
        this.createCustomEventForSpecialistsName();
    }

    showPopupWindowProfile() {
        this.togglePopupWindowProfile = true;

        const selectedEvent = new CustomEvent("geteventdetailpopupwindowprofile", {
            detail: this.togglePopupWindowProfile
          });

        this.dispatchEvent(selectedEvent);
    }

    createCustomEventForSpecialistsName() {
        this.specialistsName = this.specialistsForSpecialization;

        const selectedEvent = new CustomEvent("geteventspecialistsname", {
            detail: this.specialistsName
          });

        this.dispatchEvent(selectedEvent);
    }
}