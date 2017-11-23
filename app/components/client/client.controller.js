
class clientController {
    constructor($stateParams, dataService) {
        this.id = $stateParams.id;
        this.client = {};
        this.history = [];
        dataService.getClient(this.id)
            .then(data => {
                this.client = data;
            });
        dataService.getHistory(this.id)
            .then(data => {
                this.history = data;
            });
    }

    

}

export default clientController;