class FormCtrl {
    constructor(){}

    formModel = {
        username: ''
    };

    submitted = false;

    submitForm = () => {
        this.submitted = true;
    };
}
export default FormCtrl;
