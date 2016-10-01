/**
 *  @ngdoc module
 *  name repoSearch
 *  
 *  @description
 *  Модуль поиска репозитариев пользователей GiHub.
 **/

import angular from 'angular';
import RepoSearchComponent from './repoSearch.component';

const repoSearch = angular
	.module('repoSearch', [])
	.component('repoSearch', RepoSearchComponent)
	.name;

export default repoSearch;
