export default(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  ($stateProvider, $urlRouterProvider, $locationProvider) => {

    $stateProvider
    .state('invoices', {
      url: '/',
      template: '<invoices-directive></invoices-directive>'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
]);
