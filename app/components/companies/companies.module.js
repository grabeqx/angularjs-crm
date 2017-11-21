import companiesController from './companies.controller';

const companiesModule = angular.module('companiesModule', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('companies', {
                url: '/companies',
                template: require('./companies.html'),
                controller: companiesController,
                controllerAs: 'comCtrl'
            });
    });

export default companiesModule;