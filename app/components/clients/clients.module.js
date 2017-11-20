import clientsController from './clients.controller';

const clientsModule = angular.module('clientsModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('clients', {
                url: '/',
                template: require('./clients.html'),
                controller: clientsController,
                controllerAs: 'clients'
            });
    });

export default clientsModule;