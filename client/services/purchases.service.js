import { HOST } from '../helpers/constants.js';

export default class PurchasesService {
  constructor($http){
    this.$http = $http;
  }

  checkForPurchase(invoice) {
    return this.$http.post(`${HOST}/invoices/check_for_purchase`, invoice)
    .then((res) => {
      return res.data;
    });
  }
};

PurchasesService.$inject = ['$http'];
