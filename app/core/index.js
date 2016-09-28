/**
 *
 **/

import angular from 'angular';
import {MainAppComponent} from './main-app';

angular.module('appGithub.core', [])
	.constant('apiPath', 'https://api.github.com')
	.component('mainApp', MainAppComponent);
