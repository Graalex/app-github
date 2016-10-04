/**
 *  @ngdoc  component
 *  @name   issueItem
 *  
 *  @description
 *  Конпонент для отображения краткой информации об обращении в списке обращений
 *  @example  <issue-item issue="issues[2]"></issue-item>
 **/
import tmpl from './issueItem.jade';

const IssueItemComponent = {
	template: tmpl(),
	bindings: {
		issue: '<',
	}
};

export default IssueItemComponent;
