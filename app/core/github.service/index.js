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
			url: `${self.apiPath}/users/${userName}/repos`,
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

	getIssues(userName, repoName) {
		var self = this;

		return self.http({
			url: `${self.apiPath}/repos/${userName}/${repoName}/issues`,
			method: 'GET',
			cache: true
		})
			.then((res) => {
				let data = res.data.map(item => {
					return {
						id: item.id,
						number: item.number,
						html_url: item.html_url,
						title: item.title,
						user: {
							login: item.user.login,
							id: item.user.id,
							avatar_url: item.user.avatar_url,
							html_url: item.user.html_url,
							type: item.user.type
						},
						labels: item.labels,
						state: item.state,
						comments: item.comments,
						created_at: item.created_at,
						updated_at: item.updated_at,
						closed_at: item.closed_at,
						body: item.body
					};
				});
				
				return data;
			});
	}
}

export {GitHubService};
