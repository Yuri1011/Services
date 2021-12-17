import { LightningElement, api, track } from 'lwc';

export default class App extends LightningElement {
    @api show;

    handleShow(event) {
        this.show = event.detail;
    }
}