/**
 *
 **/

import angular from 'angular';
import {MainAppComponent} from './mainApp.component';
import {RepoFindComponent} from './repoFind.component';
import {GitHubService} from './github.service';
import {routing} from './routing';

angular.module('appGithub.core', ['ngRoute'])
	.config(routing)
	.constant('apiPath', 'https://api.github.com')
	.component('mainApp', MainAppComponent)
	.component('repoFind', RepoFindComponent)
	.service('githubService', GitHubService);
