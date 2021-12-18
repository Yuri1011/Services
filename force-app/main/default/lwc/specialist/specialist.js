import { LightningElement, api, track } from 'lwc';
import getSpecialists from '@salesforce/apex/SpecialistController.getSpecialists';

export default class Specialist extends LightningElement {
    @api categories;
    @api specializationTitle;
    specialistsForSpecialization;
    specialists;
    @api togglePopupWindowProfile;

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

    showPopupWindowProfile() {
        this.togglePopupWindowProfile = true;

        const selectedEvent = new CustomEvent("geteventdetailpopupwindowprofile", {
            detail: this.togglePopupWindowProfile
          });

        this.dispatchEvent(selectedEvent);
    }
}