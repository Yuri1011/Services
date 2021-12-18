import { LightningElement, api, track } from 'lwc';

export default class App extends LightningElement {
    @track popupWindowProfile;

    togglePopupWindowProfile(event) {
        this.popupWindowProfile = event.detail;
    }
}