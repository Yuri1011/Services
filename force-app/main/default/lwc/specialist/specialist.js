import { LightningElement, api, track } from 'lwc';
import getSpecialists from '@salesforce/apex/SpecialistController.getSpecialists';

export default class Specialist extends LightningElement {
    @api categories;
    @api specializationTitle;
    @api specialistsForSpecialization;
    @api togglePopupWindowProfile;
    @api specialistsName;
    specialists;
    namesSpecialistsForModalPopap;

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
        this.togglePopupWindowProfile = true;

        const selectedEvent = new CustomEvent("geteventdetailpopupwindowprofile", {
            detail: this.togglePopupWindowProfile,
            bubbles: true,
            composed: true
          });

        this.dispatchEvent(selectedEvent);
        this.getNamesSpec(event);
    }

    getNamesSpec(event) {
        const last = JSON.stringify(event.target.parentElement.parentElement.innerText).split(' ').splice(2,1).join().replace(/First/g, '');
        const first = JSON.stringify(event.target.parentElement.parentElement.innerText).split(' ').splice(4,1).join().replace(/"/g, '');
        this.namesSpecialistsForModalPopap = {
            'lastName': last,
            'firstName': first
        };
    }
}