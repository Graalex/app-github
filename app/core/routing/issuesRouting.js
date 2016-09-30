/**
 *
 **/

class IssuesRouting {
	constructor($route, $log, githubService) {
		'ngInject';
		
		this.route = $route;
		this.log = $log;
		this.ghService = githubService;
		
		this.template = `
			<issue-list	issues="$resolve.issues" 
				repo-name="$resolve.repoName"
				user-name="$resolve.userName">
			</issue-list>
		`;
		this.resolve = this.issuesResolver;
	}
	
	issuesResolver() {
		let self = this;
		
		return {
			issues: () => {
				return self.ghService.getIssues(self.route.current.params.user, self.route.current.params.repo)
					.then(res => {
						return res;
					})
					.catch(err => {
						self.log.error(err);
					});
			},
			repoName: () => {
				return self.route.current.params.repo;
			},
			userName: () => {
				return self.route.current.params.user;
			}
		}
	}
}

export {IssuesRouting};
