import clientsController from './clients.controller';
import dataService from '../../shared/dataService';

const clientsModule = angular.module('clientsModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('clients', {
                url: '/clients/',
                template: require('./clients.html'),
                controller: clientsController,
                controllerAs: 'clientsCtrl'
            });
    })
    .service('dataService', dataService);

export default clientsModule;