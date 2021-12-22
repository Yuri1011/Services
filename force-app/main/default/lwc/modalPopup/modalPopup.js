import { LightningElement, api } from 'lwc';

export default class ModalPopup extends LightningElement {
    @api hidenPopupWindowProfile;
    @api specialistId;

    hidePopupWindowProfile() {
        this.hidenPopupWindowProfile = false;

        const selectedEvent = new CustomEvent("geteventhidenpopupwindowprofile", {
            detail: this.hidenPopupWindowProfile
          });

        this.dispatchEvent(selectedEvent);
    }
}