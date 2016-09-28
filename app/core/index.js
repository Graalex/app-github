/**
 *
 **/

import angular from 'angular';
import {MainAppComponent} from './main-app.component';
import {RepoFindComponent} from './repo-find.component';
import {GitHubService} from './github.service';

angular.module('appGithub.core', [])
	.constant('apiPath', 'https://api.github.com')
	.component('mainApp', MainAppComponent)
	.component('repoFind', RepoFindComponent)
	.service('githubService', GitHubService);
