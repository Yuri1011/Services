import { LightningElement, wire } from 'lwc';
import getCategories from '@salesforce/apex/SpecializationController.getCategories';

export default class Specialization extends LightningElement {
    categories;

    connectedCallback() {
        getCategories()
            .then((result) => {
                this.categories = result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

