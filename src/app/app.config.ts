
/// <reference path="../../typings/index.d.ts" />

module app.config {

    // http://stackoverflow.com/questions/25073365/how-can-i-add-ui-router-stateprovider-configuration-to-my-application-with-types

    export class MyConfig {

        constructor(private $stateProvider: ng.ui.IStateProvider, 
        private $urlRouterProvider: ng.ui.IUrlRouterProvider,
        private $locationProvider: ng.ILocationProvider){
            this.init();
        }

        private init: () => void = () => {
            
            // html5 removes the need for # in URL
            this.$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            this.$urlRouterProvider.otherwise('/');

            // angular-ui-router for multiple views
            this.$stateProvider
                .state('index', <ng.ui.IState>{
                    url: "/",
                    views: {
                        "viewA": {
                            templateUrl: "app/home/homenav.html"
                        },
                        "viewB": {
                            templateUrl: "app/home/home.html"
                        }
                    }
                });

            // more states here.

        }

    }

    angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
        ($stateProvider: ng.ui.IStateProvider, 
        $urlRouterProvider: ng.ui.IUrlRouterProvider, 
        $locationProvider: ng.ILocationProvider) => {
            return app.config.MyConfig($stateProvider, $urlRouterProvider, $locationProvider);
    }]);
}