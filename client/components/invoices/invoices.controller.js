import { HOST } from '../../helpers/constants.js';
import AddInvoiceController from '../modal_components/add_invoice/add_invoice.controller.js';
import PurchaseController from '../modal_components/purchase/purchase.controller.js';
import SubscriptionController from '../modal_components/subscribe/subscribe.controller.js';

class InvoicesController {
  constructor($http, $uibModal, InvoicesService, $scope){
    this.title = 'Stripe Test Invoices'
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.InvoicesService = InvoicesService;
    this.InvoicesService.updateInvoices()
    .then(() => {
      this.invoices = this.InvoicesService.getInvoices();
      console.log('THIS.INVOICES', this.invoices);
    });


    $scope.$watch(() => {
      return this.InvoicesService.getInvoices();
    }, (newValue) => {
      this.invoices = newValue;
    }, true);

    // setInterval(() => {
    //   console.log(this.invoices);
    // }, 2000);
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

  makePurchase(invoice) {
    this.InvoicesService.setCurrentInvoice(invoice);
    this.$uibModal.open({
      scope: this.$scope,
      show: true,
      template: require('../modal_components/purchase/purchase.html'),
      controller: PurchaseController,
      controllerAs: 'vm',
      size: 'lg'
    });
  }

  createSubscription(invoice) {
    this.InvoicesService.setCurrentInvoice(invoice);
    this.$uibModal.open({
      scope: this.$scope,
      show: true,
      template: require('../modal_components/subscribe/subscribe.html'),
      controller: SubscriptionController,
      controllerAs: 'vm',
      size: 'lg'
    });
  }

};

InvoicesController.$inject = ['$http', '$uibModal', 'InvoicesService', '$scope'];

export default InvoicesController;
