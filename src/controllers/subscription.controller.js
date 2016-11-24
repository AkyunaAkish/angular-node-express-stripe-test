import { HOST } from '../helpers/constants.js';

export default class SubscriptionController {
  constructor($http){
    this.title = 'Subscription'
    this.http = $http;
  }

  testRoute() {
    this.http.post(`${HOST}/stripe/subscription`, {test: 'test'})
    .then((res) => {
      console.log('RES FROM TEST SUBSCRIPTION', res);
    })
    .catch((err) => {
      console.log('ERROR IN TEST SUBSCRIPTION', err);
    })
  }
};

SubscriptionController.$inject = ['$http'];
