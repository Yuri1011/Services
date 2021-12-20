import { LightningElement, api,track} from 'lwc';
import getCategories from '@salesforce/apex/CategoryController.getCategories';

export default class Category extends LightningElement {
    @api categories;
    showSpecialistComp = true;
    @api specializationTitle;
    @track togglePopupWindowProfile;


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


    // getEventDetailPopupWindowProfile(event) {
    //     this.togglePopupWindowProfile = event.detail;
    //     this.createCustomEventForPopupWindow();
    // }

    createCustomEventForPopupWindow() {
        const selectedEvent = new CustomEvent("togglepopupwindowprofile", {
            detail: this.togglePopupWindowProfile
          });
        this.dispatchEvent(selectedEvent);
    }
}