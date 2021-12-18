import { LightningElement, api, track } from 'lwc';

export default class App extends LightningElement {
    @track popupWindowProfile;
    @track hidenPopupWindowProfile;

    togglePopupWindowProfile(event) {
        this.popupWindowProfile = event.detail;
    }

    getEventHidenPopupWindowProfile(event) {
        this.hidenPopupWindowProfile = event.detail;
        this.popupWindowProfile = this.hidenPopupWindowProfile;
    }
}