/**
 *
 **/

import {RepoFindController} from './RepoFindController.js';
import tmpl from './RepoFind.jade';

let RepoFindComponent = {
	template: tmpl(),
	controller: RepoFindController
};

export  {RepoFindComponent};
