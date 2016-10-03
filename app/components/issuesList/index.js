/**
 *  @ngdoc  module
 *  @name   issuesList
 **/

import angular from 'angular';
import IssuesListComponent from './issueList.component';

const IssuesList = angular.module('issuesList', [])
	.component('issuesList', IssuesListComponent)
	.name;

export default IssuesList;
