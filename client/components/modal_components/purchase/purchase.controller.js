import { HOST } from '../../../helpers/constants.js';

export default class PurchaseController {
  constructor($http, stripe, $uibModalInstance, InvoicesService){
    this.$http = $http;
    this.stripe = stripe;
    this.$uibModalInstance = $uibModalInstance;
    this.InvoicesService = InvoicesService;
    this.currentInvoice = this.InvoicesService.getCurrentInvoice();
  }

  submitPurchase() {
    console.log('SUBMIT PURCHASE CALLED', this.stripe, this.purchaseForm);

    this.stripe.card.createToken({
      number: this.purchaseForm.cardNumber,
      cvc: this.purchaseForm.cardSecurityCard,
      exp_month: this.purchaseForm.exp_month,
      exp_year: this.purchaseForm.exp_year
    }, (status, res) => {
      this.$http.post(`${HOST}/stripe/purchase`, {invoice: this.currentInvoice, stripe_token: res.id})
      .then((res) => {
        console.log('RES FROM TEST PURCHASE', res);
      })
      .catch((err) => {
        console.log('ERROR IN TEST PURCHASE', err);
      });
    });
  }

  closeModal() {
    this.$uibModalInstance.dismiss();
  }
};

PurchaseController.$inject = ['$http', 'stripe', '$uibModalInstance', 'InvoicesService'];
