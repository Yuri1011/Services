import { LightningElement, wire } from 'lwc';
import getCategories from '@salesforce/apex/CategoryController.getCategories';
import getSpecializatios from '@salesforce/apex/SpecializationController.getSpecializatios';

export default class Category extends LightningElement {
    categories;
    // specializatios;

    connectedCallback() {
        getCategories()
            .then((result) => {
                this.categories = result;
                console.log('result ', result);
            })
            .catch((error) => {
                console.log(error);
            });

            getSpecializatios()
            .then((result) => {
                this.specializatios = result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}