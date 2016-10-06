/**
 *  @ngdoc  component
 *  @name   repoSearch
 *  
 *  @description
 *  Определение компонента для поиска репозитариев пользователей GitHub.
 *  @example <repo-search select-repo="$ctrl.selectRepo($event)"></repo-search>
 **/

import RepoSearchController from './repoSearch.controller';
import tmpl from './repoSearch.jade';

const RepoSearchComponent = {
	controller: RepoSearchController,
	template: tmpl(),
	bindings: {
		selectRepo: '&',
		expanded: '&'
	}
};

export default RepoSearchComponent;
