/**
 *  @ngdoc  component
 *  @name   issuesList
 *  
 *  @description
 *  Компонент для отображения списка обращений выбранного репозитария
 *  @example  <issies-list repo-name="repo-test" user-name="user-test" issues="issues-list"></issues-list>
 **/

import tmpl from './issueList.jade';

const IssuesListComponent = {
	template: tmpl(),
	bindings: {
		userName: '<',
		repoName: '<',
		issues: '<'
	}
};

export default IssuesListComponent;
