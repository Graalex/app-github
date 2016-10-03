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
import IssueItem from './issueItem';

const components = angular
	.module('ghApp.components', [
		AppMain,
		RepoSearch,
		IssuesList,
		IssueItem
	])
	.name;

export  default components;
