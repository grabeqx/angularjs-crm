import clientController from './client.controller';
import dataService from '../../shared/dataService';
import { customDate } from '../../shared/filters';

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
    .service('dataService', dataService)
    .filter('customDate', customDate);

export default clientModule;