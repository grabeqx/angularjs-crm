import clientsModule from './components/clients/clients.module';
import companiesModule from './components/companies/companies.module';

const modules = [
    clientsModule.name,
    companiesModule.name
];

const dependencies = [
    'ui.router'
];

angular.module('app',[...dependencies, ...modules])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });