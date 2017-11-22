import clientController from './client.controller';
import dataService from '../../shared/dataService';

const clientModule = angular.module('clientModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('client', {
                url: '/client/:id',
                template: require('./client.html'),
                controller: clientController,
                controllerAs: 'clientCtrl'
            });
    })
    .service('dataService', dataService);

export default clientModule;