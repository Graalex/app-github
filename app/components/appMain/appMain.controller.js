/**
 *  @ngdoc  controller
 *  @name   AppMainController
 **/

class AppMainController {
	constructor($log, appMainService) {
		'ngInject';
		this.log = $log;
		this.service = appMainService;
	}

	$onInit() {
		this.userName = '';
		this.repoName = '';
		this.fullName = '';
		this.issues = null;
		this.expanded = false;
	}

	repoSelect(data) {
		if (!data.userName || !data.repoName) return;

		let self = this;
		self.userName = data.userName;
		self.repoName = data.repoName;
		self.fullName = `${self.userName}/${self.repoName}`;

		self.service.getIssues(self.userName, self.repoName)
			.then(res => {
				self.issues = res;
				if(res.length > 0) {
					self.expanded = false;
				}
			})
			.catch(err => {
				self.log.error(err);
			});
	}
	
	toggleExpand(data) {
		if(data) {
			this.expanded = data.expanded;
		}
	}
}

export default AppMainController;
