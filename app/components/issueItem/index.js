/**
 *  @ngdoc  module
 *  @name   issueItem
 **/

import angular from 'angular';
import IssueItemComponent from './issueItem.component';

const IssueItem = angular.module('issueItem', [])
	.component('issueItem', IssueItemComponent)
	.name;

export default IssueItem;
