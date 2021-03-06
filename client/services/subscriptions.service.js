import { HOST } from '../helpers/constants.js';

class SubscriptionsService {
  constructor($http){
    this.$http = $http;
  }

  checkForSubscription(invoice) {
    return this.$http.post(`${HOST}/invoices/check_for_subscription`, invoice)
    .then((res) => {
      return res.data;
    });
  }
};

SubscriptionsService.$inject = ['$http'];

export default SubscriptionsService;
