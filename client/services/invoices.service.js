import { HOST } from '../helpers/constants.js';

export default class InvoicesService {
  constructor($http){
    this.currentInvoice = null;
    this.invoices = [];
    this.$http = $http;
  }

  setCurrentInvoice(invoice) {
    this.currentInvoice = invoice;
    console.log('CURRENT INVOICE SET', this.currentInvoice);
  }

  getCurrentInvoice(invoice) {
    return this.currentInvoice;
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
