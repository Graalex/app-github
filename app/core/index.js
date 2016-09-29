/**
 *
 **/

import angular from 'angular';
import {MainAppComponent} from './MainApp.Component';
import {RepoFindComponent} from './RepoFind.Component';
import {GitHubService} from './Github.Service';

angular.module('appGithub.core', [])
	.constant('apiPath', 'https://api.github.com')
	.component('mainApp', MainAppComponent)
	.component('repoFind', RepoFindComponent)
	.service('githubService', GitHubService);
