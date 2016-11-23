export default class SubscriptionController{
  constructor($http){
    this.title = 'Subscription'
    this.http = $http;
  }

  testRoute() {
    console.log('SUBSCRIPTION TEST ROUTE CALLED');
  }
}
