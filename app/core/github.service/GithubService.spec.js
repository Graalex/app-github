/**
 *
 **/

import {reposMock} from './GithubService.mock.js';

describe('githubService test:', () => {
	let httpBackend;
	let githubService;

	beforeEach(angular.mock.module('appGithub.core'));
	beforeEach(angular.mock.inject((_$httpBackend_, _githubService_) => {
		httpBackend = _$httpBackend_;
		githubService = _githubService_;
	}));

	afterEach(() => {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it('should have a githubService', () => {
		expect(githubService).toBeDefined();
	});

	it('get a list of repositories', () => {
		httpBackend.expectGET('https://api.github.com/users/test-user/repos')
			.respond(200, reposMock);
		githubService.getRepos('test-user')
			.then(res => {
				expect(res).toEqual(reposMock);
			});

		httpBackend.flush();
	});
});
