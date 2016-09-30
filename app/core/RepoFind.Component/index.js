/**
 *
 **/

import {RepoFindController} from './repoFindController.js';
import tmpl from './repoFind.jade';

let RepoFindComponent = {
	template: tmpl(),
	controller: RepoFindController
};

export  {RepoFindComponent};
