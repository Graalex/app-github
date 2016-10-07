/**
 *  @ngdoc  service
 *  @name   appMainService
 *
 *  @description
 *  Сервис для работы с GitHub api.
 *  Функционал сервиса:
 *    <ol>
 *    <li>Получение списка репозитариев пользователя по имени.</li>
 *    <li>Получение списка обращений для репозитария пользователя.</li>
 *    <li>Получение отдельного обращения по имени пользователя, <br>
 *      имени репозитария и номера обращения.</li>
 *    </ol>
 **/

class AppMainService {
	constructor($http, apiPath) {
		'ngInject';
		this.http = $http;
		this.path = apiPath;
	}

	getRepos(userName) {
		let self = this;

		return self.http({
			url: `${self.path}/users/${userName}/repos`,
			method: 'GET',
			cache: true
		})
			.then(res => {
				return res.data;
			});
	}

	getIssues(userName, repoName) {
		let self = this;

		return self.http({
			url: `${self.path}/repos/${userName}/${repoName}/issues`,
			method: 'GET',
			cache: true
		})
			.then(res => {
				return res.data;
			});
	}

	getIssue(userName, repoName, issueNumber) {
		let self = this;

		return self.http({
			url: `${self.path}/repos/${userName}/${repoName}/issues/${issueNumber}`,
			method: 'GET',
			cache: true
		})
			.then(res => {
				return res.data;
			});
	}
}

export default AppMainService;
