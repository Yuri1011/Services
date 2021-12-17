import { LightningElement, api,track} from 'lwc';
import getCategories from '@salesforce/apex/CategoryController.getCategories';

export default class Category extends LightningElement {
    @api categories;
    showSpecialistComp = true;
    @api specializationTitle;
    @track showPopupEvent;


    showSpecialist(event) {
        this.specializationTitle = event.target.innerText;
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


    handleShowPopup(event) {
        this.showPopupEvent = event.detail;
        this.handleShow();
    }

    handleShow() {
        const selectedEvent = new CustomEvent("handleshow", {
            detail: this.showPopupEvent
          });
        this.dispatchEvent(selectedEvent);
    }
}