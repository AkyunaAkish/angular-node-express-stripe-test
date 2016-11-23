export default(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $stateProvider
    .state('/', {
      url: '/',
      scope: {},
      template: require('./templates/home.html'),
      controllerAs: 'home',
      controller: 'HomeController'
    })
    .state('purchase', {
      url: '/purchase',
      scope: {},
      template: require('./templates/purchase.html'),
      controllerAs: 'purchase',
      controller: 'PurchaseController'
    })
    .state('subscription', {
      url: '/subscription',
      scope: {},
      template: require('./templates/subscription.html'),
      controllerAs: 'subscription',
      controller: 'SubscriptionController'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
]
)
