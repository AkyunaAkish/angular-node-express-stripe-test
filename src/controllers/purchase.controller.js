export default class PurchaseController{
  constructor($http){
    this.title = 'Purchase'
    this.http = $http;
  }

  testRoute() {
    console.log('PURCHASE TEST ROUTE CALLED');
  }
}
