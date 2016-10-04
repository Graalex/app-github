/**
 * @ngdoc module
 * @name ghApp
 *
 * @description
 * Корневой модуль приложения
 **/

import angular from 'angular';
import Sanitize from  'angular-sanitize';
import 'ng-showdown';

import Components from './components';

angular.module('ghApp', [
	Components,
	Sanitize
]);

