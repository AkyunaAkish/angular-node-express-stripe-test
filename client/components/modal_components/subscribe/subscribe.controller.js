import { HOST } from '../../../helpers/constants.js';

export default class SubscriptionController {
  constructor($http, $uibModalInstance){
    this.title = 'Subscription'
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
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

SubscriptionController.$inject = ['$http', '$uibModalInstance'];
