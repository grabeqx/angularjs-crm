import clientsModule from './components/clients/clients.module';

angular.module('app',['ui.router', clientsModule.name])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });