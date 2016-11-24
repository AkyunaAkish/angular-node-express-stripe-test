import { HOST } from '../../../helpers/constants.js';

export default class AddInvoiceController {
  constructor($http, InvoicesService, $uibModalInstance){
    this.$http = $http;
    this.InvoicesService = InvoicesService;
    this.$uibModalInstance = $uibModalInstance;
  }

  addInvoice() {
    let request = {
      first_name: this.addInvoiceObj.firstName,
      last_name: this.addInvoiceObj.lastName,
      amount: parseFloat(Math.round(this.addInvoiceObj.amount * 100) / 100).toFixed(2)
    };

    this.$http.post(`${HOST}/invoices/add`, request)
    .then((res) => {
      this.addInvoiceObj = {};
      this.InvoicesService.updateInvoices();
      this.closeModal();
    })
    .catch((err) => {
      console.log('Err', err);
      alert(err);
    });
  }

  closeModal() {
    this.$uibModalInstance.dismiss();
  }
};

AddInvoiceController.$inject = ['$http', 'InvoicesService', '$uibModalInstance'];
