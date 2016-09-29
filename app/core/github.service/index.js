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
						full_name: item.full_name,
						description: item.description,
						open_issues: item.open_issues
					}
				});

				return data;
			});
	}
}

export {GitHubService};
