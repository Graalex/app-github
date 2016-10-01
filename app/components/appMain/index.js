/**
 *  @ngdoc  module
 *  @name   appMain
 *
 *  @description
 *  Реализация основного компонета приложения и сервиса работы с GitHub api.
 *  @example <app-main></app-main>
 **/

import angular from 'angular';
import AppMainComponent from './appMain.component.js';
import AppMainService from './appMain.service';

const AppMain = angular
	.module('appMain', [])
	.component('appMain', AppMainComponent)
	.service('appMainService', AppMainService)
	.constant('apiPath', 'https://api.github.com')
	.name;

export default AppMain;
