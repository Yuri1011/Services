import { LightningElement, api, track } from 'lwc';

export default class App extends LightningElement {
    @track popupWindowProfile;
    @track hidenPopupWindowProfile;

    getEventHidenPopupWindowProfile(event) {
        this.hidenPopupWindowProfile = event.detail;
        this.popupWindowProfile = this.hidenPopupWindowProfile;
    }

    getEventDetailPopupWindowProfile(event) {
        this.popupWindowProfile = event.detail;
    }
}