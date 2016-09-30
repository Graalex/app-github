/**
 *
 **/

class RepoFindController {
	constructor(githubService, $log, $location) {
		'ngInject';
		this.ghService = githubService;
		this.location = $location;
		this.log = $log;

		this.userName = '';
		this.repoName = '';
		this.repos = null;
		this.placRepo = 'Название репозитария';
	}

	download() {
		let self = this;
		self.repoName = '';
		self.placRepo = '';
		self.repos = null;

		self.ghService.getRepos(this.userName)
			.then(res => {
				self.repos = res;
				if(self.repos.length == 0) this.placRepo = 'Нет репозитариев'
			})
			.catch(err => {
				this.log.error(err);
				// TODO: displayError();
			});
	}

	select() {
		let self = this;

		if(self.repos.some(item => item.name === self.repoName)) {
			self.location.path(`/${this.userName}/${this.repoName}/issues`);
		}
	}
}

export {RepoFindController};
