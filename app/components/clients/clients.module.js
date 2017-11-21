import clientsController from './clients.controller';

const clientsModule = angular.module('clientsModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('clients', {
                url: '/clients/',
                template: require('./clients.html'),
                controller: clientsController,
                controllerAs: 'clientsCtrl'
            });
    });

export default clientsModule;