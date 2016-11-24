import { HOST } from '../../helpers/constants.js';
import AddInvoiceController from '../modal_components/add_invoice/add_invoice.controller.js';

export default class InvoicesController {
  constructor($http, $uibModal, InvoicesService, $scope){
    this.title = 'Stripe Test Invoices'
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.InvoicesService = InvoicesService;
    this.InvoicesService.updateInvoices();
    this.invoices = this.InvoicesService.getInvoices();

    $scope.$watch(() => {
      return this.InvoicesService.getInvoices();
    }, (newValue) => {
      this.invoices = newValue;
    }, true);
  }

  addInvoice() {
    this.$uibModal.open({
      scope: this.$scope,
      show: true,
      template: require('../modal_components/add_invoice/add_invoice.html'),
      controller: AddInvoiceController,
      controllerAs: 'vm',
      size: 'lg'
    });
  }

};

InvoicesController.$inject = ['$http', '$uibModal', 'InvoicesService', '$scope'];
