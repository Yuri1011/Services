import { LightningElement } from 'lwc';
import getSpecializatios from '@salesforce/apex/SpecializationController.getSpecializatios';

export default class Specialization extends LightningElement {
    specializatios;

    connectedCallback() {
        getSpecializatios()
            .then((result) => {
                this.specializatios = result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}