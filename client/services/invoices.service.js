import { HOST } from '../helpers/constants.js';

export default class InvoicesService {
  constructor($http){
    this.currentInvoice = null;
    this.invoices = [];
    this.$http = $http;
  }

  setCurrentInvoice(invoice) {

  }

  getCurrentInvoice(invoice) {

  }

  getInvoices() {
    return this.invoices;
  }

  updateInvoices() {
    this.$http.get(`${HOST}/invoices/`)
    .then((invoices) => {
      this.invoices = invoices.data;
    })
  }
};

InvoicesService.$inject = ['$http'];
