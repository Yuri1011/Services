import { LightningElement, api} from 'lwc';
import getCategories from '@salesforce/apex/CategoryController.getCategories';

export default class Category extends LightningElement {
    @api categories;
    showSpecialistComp = true;
    @api specializationName;

    showSpecialist(event) {
        this.specializationName = event.target.innerText;
        this.showSpecialistComp = false;
    }

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