import clientController from './client.controller';

const clientModule = angular.module('clientModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('client', {
                url: '/client/:id',
                template: require('./client.html'),
                controller: clientController,
                controllerAs: 'clientCtrl'
            });
    });

export default clientModule;