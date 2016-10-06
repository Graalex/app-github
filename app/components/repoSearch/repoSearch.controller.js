/**
 *  @ngdoc  controller
 *  name    RepoSearchController
 *
 *  @description
 *  Класс контролера для компонента repoSearch.
 **/

class RepoSearchController {
	constructor($log, appMainService) {
		'ngInject';
		this.service = appMainService;
		this.log = $log;

	}

	$onInit() {
		this.userName = '';
		this.repoName = '';
		this.repos = [];
		this.placRepo = 'Название репозитария';
		this.expand = false;
	}

	downloadRepos() {
		let self = this;
		self.repoName = '';
		self.placRepo = '';
		self.repos = null;

		self.service.getRepos(self.userName)
			.then(res => {
				self.repos = res;
				if(self.repos.length == 0) this.placRepo = 'Нет репозитариев'
			})
			.catch(err => {
				this.log.error(err);
				// TODO: displayError();
			});
	}

	changeRepo() {
		if(this.repos.some(item => item.name === this.repoName)) {
			this.selectRepo({
				$event: {
					userName: this.userName,
					repoName: this.repoName
				}
			});
		}
	}
	
	toggleExpand() {
		this.expand = !this.expand;
		this.expanded({
			$event: {
				expanded: this.expand
			}
		});
	}
}

export default RepoSearchController;
