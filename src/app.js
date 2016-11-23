import angular from 'angular';
import 'angular-ui-router';

import HomeController from './controllers/home.controller.js';
import PurchaseController from './controllers/purchase.controller.js';
import SubscriptionController from './controllers/subscription.controller.js';
import Router from './routes.js';

import './sass/style.scss';

angular
.module('stripeApp', ['ui.router'])
.controller( 'HomeController', HomeController )
.controller( 'PurchaseController', PurchaseController )
.controller( 'SubscriptionController', SubscriptionController )
.config( Router );
