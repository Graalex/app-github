/**
 *  @ngdoc  module
 *  @name   appMain
 *
 *  @description
 *  Реализация основного компонета приложения и сервиса работы с GitHub api.
 *  @example <app-main></app-main>
 **/

import angular from 'angular';
import 'angular-route';
import AppMainComponent from './appMain.component.js';
import AppMainService from './appMain.service';

const AppMain = angular
	.module('appMain', ['ngRoute'])
	.component('appMain', AppMainComponent)
	.service('appMainService', AppMainService)
	.constant('apiPath', 'https://api.github.com')
	.config(($routeProvider, $locationProvider) => {
		'ngInject';
		$locationProvider.html5Mode({enabled: true, requireBase: false});

		$routeProvider
			.when('/', {
				template: `
					<issues-list 
						user-name="$ctrl.userName" 
						repo-name="$ctrl.repoName" 
						issues="$ctrl.issues"
						ng-if="$ctrl.issues.length > 0"></issues-list>
				`
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.name;

export default AppMain;
