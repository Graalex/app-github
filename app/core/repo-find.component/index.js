/**
 *
 **/

import {RepoFindController} from './repo-find.controller';
import tmpl from './repo-find.tmpl.jade';

let RepoFindComponent = {
	template: tmpl(),
	controller: RepoFindController
};

export  {RepoFindComponent};
