/**
 *  @ngdoc
 *  @name ghApp.components module
 *
 *  @description
 *  В модуле определены компоненты приложения
 **/

import angular from 'angular';
import Page from './page';

const components = angular
	.module('ghApp.components', [
		Page
	])
	.name;

export  default components;
