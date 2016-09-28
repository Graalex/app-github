/**
 *
 **/

class GitHubService {
	constructor($http, apiPath) {
		'ngInject';
		this.http = $http;
		this.apiPath = apiPath;
	}

	getRepos(userName) {
		var self = this;
		return self.http({
			url: self.apiPath + `/users/${userName}/repos`,
			method: 'GET',
			cache: true
		})
			.then((res) => {
				let data = res.data.map( item => {
					return {
						id: item.id,
						name: item.name,
						fullName: item.full_name,
						description: item.description,
						issues: item.open_issues
					}
				});
				
				return data;
			});
	}
}

export {GitHubService};
