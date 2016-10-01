/**
 *  @ngdoc  module
 *  @name ghApp.components
 *
 *  @description
 *  В модуле определены компоненты приложения
 **/

import angular from 'angular';
import AppMain from './appMain';
import RepoSearch from './repoSearch';

const components = angular
	.module('ghApp.components', [
		AppMain,
		RepoSearch
	])
	.name;

export  default components;
