import clientsModule from './components/clients/clients.module';
import companiesModule from './components/companies/companies.module';
import clientModule from './components/client/client.module';
import historyStep from './directives/history-step/history-step';

const modules = [
    clientsModule.name,
    companiesModule.name,
    clientModule.name,
    historyStep.name
];

const dependencies = [
    'ui.router'
];

angular.module('app',[...dependencies, ...modules])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/clients/');
        $locationProvider.html5Mode(true);
    });