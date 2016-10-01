/**
 *  @ngdoc  service
 *  @name   appMainService
 *
 *  @description
 *  Сервис для работы с GitHub api.
 *  Функционал сервиса:
 *    1. Получение списка репозитариев пользователя по имени.
 *    2. Получение списка обращений для репозитария пользователя
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
}

export default AppMainService;
