import { LightningElement, wire } from 'lwc';
import getCategories from '@salesforce/apex/CategoryController.getCategories';
// import getSpecializatios from '@salesforce/apex/SpecializationController.getSpecializatios';

export default class Category extends LightningElement {
    categories;
    // specializatios;

    showSpecialist(event) {
        this.template.querySelector('.containerCategory').style = 'display:none';
    }

    connectedCallback() {
        getCategories()
            .then((result) => {
                this.categories = result;
            })
            .catch((error) => {
                console.log(error);
            });

            // getSpecializatios()
            // .then((result) => {
            //     this.specializatios = result;
            // })
            // .catch((error) => {
            //     console.log(error);
            // });
    }
}