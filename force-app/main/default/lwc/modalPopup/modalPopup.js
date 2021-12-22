import { LightningElement, api, wire } from 'lwc';
import getNamesSpecialists from '@salesforce/apex/ModalPopupController.getNamesSpecialists';

export default class ModalPopup extends LightningElement {
    @api hidenPopupWindowProfile;
    @api specialistId;
    @wire(getNamesSpecialists, { specialistId: '$specialistId' })
    namesSpecialist;

    hidePopupWindowProfile() {
        this.hidenPopupWindowProfile = false;

        const selectedEvent = new CustomEvent("geteventhidenpopupwindowprofile", {
            detail: this.hidenPopupWindowProfile
          });

        this.dispatchEvent(selectedEvent);
    }
}