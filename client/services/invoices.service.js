import { HOST } from '../helpers/constants.js';

class InvoicesService {
  constructor($http, PurchasesService, SubscriptionsService, $q){
    this.currentInvoice = null;
    this.invoices = [];
    this.$http = $http;
    this.SubscriptionsService = SubscriptionsService;
    this.PurchasesService = PurchasesService;
    this.$q = $q;
  }

  setCurrentInvoice(invoice) {
    this.currentInvoice = invoice;
  }

  getCurrentInvoice(invoice) {
    return this.currentInvoice;
  }

  getInvoices() {
    return this.invoices;
  }

  checkSubscriptions(invoices) {
    const promiseArray = [];

    for (let i = 0; i < invoices.length; i++) {
      promiseArray.push(this.SubscriptionsService.checkForSubscription(invoices[i]));
    }

    var finalArr = this.$q.all(promiseArray).then((res) => {
      console.log('RES CHECK SUB', res);
      return res;
    });

    return finalArr;
  }

  checkPurchases(invoices) {
    const promiseArray = [];

    for (let i = 0; i < invoices.length; i++) {
      promiseArray.push(this.PurchasesService.checkForPurchase(invoices[i]));
    }

    var finalArr = this.$q.all(promiseArray).then((res) => {
      console.log('RES CHECK purchases', res);
      return res;
    });

    return finalArr;
  }

  updateInvoices() {
    return this.$http.get(`${HOST}/invoices/`)
    .then((invoices) => {
      return this.checkSubscriptions(invoices.data)
      .then((subChecked) => {
        this.invoices = subChecked;
        return this.invoices;
      })
      .then(() => {
        return this.checkPurchases(this.invoices)
        .then((purChecked) => {
          this.invoices = purChecked;
          return this.invoices;
        });
      });
    });
  }
};

InvoicesService.$inject = ['$http', 'PurchasesService', 'SubscriptionsService', '$q'];

export default InvoicesService;
