import { HOST } from '../helpers/constants.js';

export default class PurchaseController {
  constructor($http, stripe){
    this.title = 'Make a Purchase'
    this.http = $http;
    this.stripe = stripe;
  }

  testRoute() {
    console.log('STRIPE', this.stripe);
    this.http.post(`${HOST}/stripe/purchase`, {test: 'test'})
    .then((res) => {
      console.log('RES FROM TEST PURCHASE', res);
    })
    .catch((err) => {
      console.log('ERROR IN TEST PURCHASE', err);
    })
  }
};

PurchaseController.$inject = ['$http', 'stripe'];
