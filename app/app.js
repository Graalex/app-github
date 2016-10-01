/**
 * @ngdoc module
 * @name ghApp
 *
 * @description
 * Корневой модуль приложения
 **/

import angular from 'angular';
import Router from 'angular-route';
import Sanitize from  'angular-sanitize';
import Markdown from 'ng-showdown';

import Components from './components';

angular.module('ghApp', [
	Components,
	Router,
	Sanitize
]);

