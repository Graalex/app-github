/**
 *
 **/

import {IssuesRouting} from './issuesRouting';

export function routing($routeProvider, $locationProvider) {
	'ngInject';
	$locationProvider.html5Mode({enabled: true, requireBase: false});

	$routeProvider
		.when('/', {
			template: ''
		})
		.when('/:user/:repo/issues', new IssuesRouting())
		.otherwise({
			redirectTo: '/'
		});
};

