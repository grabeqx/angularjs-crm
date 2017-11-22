class clientsController {
    constructor(dataService) {
        this.clients = [];
        dataService.getClients()
            .then(data => {
                this.clients = data;
            });
    }
}

export default clientsController;