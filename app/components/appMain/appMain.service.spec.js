/**
 *  @ngdoc  service
 *  name  appMain.service.spec
 *
 *  @description
 *  Тесты для сервиса appMainService
 **/

import { ReposListMock, IssuesListMock, IssueMock } from './appMain.service.mock.js';

describe('appMainService service testing ...', () => {
	var httpBackend, path, service, userName, repoName, issueNumber;

	beforeEach(angular.mock.module('appMain'));
	beforeEach(angular.mock.inject(($httpBackend, appMainService, apiPath) => {
		httpBackend = $httpBackend;
		service = appMainService;
		path = apiPath;
		userName = 'test-user';
		repoName = 'test-repo';
		issueNumber = 1;
	}));

	afterEach(() => {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it('should path api GitHub:', () => {
		expect(path).toBe('https://api.github.com');
	});

	it('should exist appMainService instance:', () => {
		expect(service).toBeDefined();
	});

	it('should get list repositaries by user name:', () => {
		httpBackend.expectGET(`${path}/users/${userName}/repos`)
			.respond(200, ReposListMock);

		service.getRepos(userName)
			.then(data => {
				expect(data).toEqual(ReposListMock);
			});

		httpBackend.flush();
	});

	it('should get list issues by user name and repo name:', () => {
		httpBackend.expectGET(`${path}/repos/${userName}/${repoName}/issues`)
			.respond(200, IssuesListMock);

		service.getIssues(userName, repoName)
			.then(data => {
				expect(data).toEqual(IssuesListMock);
			});

		httpBackend.flush();
	});

	it('shoud get issue by user name, repo name and issue number:', () => {
		httpBackend.expectGET(`${path}/repos/${userName}/${repoName}/issues/${issueNumber}`)
			.respond(200, IssueMock);

		service.getIssue(userName, repoName, issueNumber)
			.then(data => {
				expect(data).toEqual(IssueMock);
			});

		httpBackend.flush();
	});
});
