/**
 *
 **/

//import 'angular';
//import 'angular-mocks/angular-mocks';

var context = require.context('../page', true, /\.spec\.js$/);
context.keys().forEach(context);
