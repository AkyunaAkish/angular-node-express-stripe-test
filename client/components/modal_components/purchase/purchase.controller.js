import { HOST } from '../../../helpers/constants.js';

export default class PurchaseController {
  constructor($http, stripe, $uibModalInstance){
    this.title = 'Make a Purchase'
    this.$http = $http;
    this.stripe = stripe;
    this.$uibModalInstance = $uibModalInstance;

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

  closeModal() {
    this.$uibModalInstance.dismiss();
  }
};

PurchaseController.$inject = ['$http', 'stripe', '$uibModalInstance'];
