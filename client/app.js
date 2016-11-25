import angular from 'angular';
import 'angular-ui-router';
import 'angular-stripe';
import 'angular-bootstrap-npm';
import 'angular-credit-cards';

import invoicesDirective from './components/invoices/invoices.directive.js';
import InvoicesService from './services/invoices.service.js';
import Router from './routes.js';
import './sass/style.scss';


angular.module('stripeApp', [
  'ui.router',
  'angular-stripe',
  'ui.bootstrap',
  'credit-cards'
])
.config((stripeProvider) => {
  stripeProvider.setPublishableKey(process.env.TEST_PUBLISHABLE_KEY);
})
.service('InvoicesService', InvoicesService)
.directive('invoicesDirective', invoicesDirective)
.config( Router );
