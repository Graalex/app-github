/**
 *  @ngdoc
 *  @name page module
 *
 *  @description
 *  Модуль реализует компонент page
 *  @example <page></page>
 **/

import angular from 'angular';
import PageComponent from './page.component';

const page = angular
	.module('ghApp.page', [])
	.component('page', PageComponent)
	.name;

export default page;
