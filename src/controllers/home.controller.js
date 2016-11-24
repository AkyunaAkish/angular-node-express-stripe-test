export default class HomeController {
  constructor($http){
    this.title = 'Stripe Test Home'
    this.http = $http;
  }
};

HomeController.$inject = ['$http'];
