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
import IssuesList from './issuesList';

const components = angular
	.module('ghApp.components', [
		AppMain,
		RepoSearch,
		IssuesList
	])
	.name;

export  default components;
