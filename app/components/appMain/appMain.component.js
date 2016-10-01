/**
 *  @ngdoc component
 *  @name page
 *  
 *  @description
 *  Определение компонента page.
 **/

import tmpl from './appMain.jade';
import AppMainController from './appMain.controller';

const AppMainComponent = {
	template: tmpl(),
	controller: AppMainController
};

export default AppMainComponent;
