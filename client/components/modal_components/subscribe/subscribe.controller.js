import { HOST } from '../../../helpers/constants.js';

export default class SubscriptionController {
  constructor($http, stripe, $uibModalInstance, InvoicesService){
    this.$http = $http;
    this.stripe = stripe;
    this.$uibModalInstance = $uibModalInstance;
    this.InvoicesService = InvoicesService;
    this.currentInvoice = this.InvoicesService.getCurrentInvoice();
    this.subscriptionForm = {};
    this.subscriptionForm.frequency = 'monthly';
  }

  submitSubscription() {
    this.stripe.card.createToken({
      number: this.subscriptionForm.cardNumber,
      cvc: this.subscriptionForm.cardSecurityCard,
      exp_month: this.subscriptionForm.exp_month,
      exp_year: this.subscriptionForm.exp_year
    }, (status, res) => {
      this.$http.post(`${HOST}/stripe/subscribe`, {
        invoice: this.currentInvoice,
        subscription_info: {
          card_holder_first_name: this.subscriptionForm.firstName,
          card_holder_last_name: this.subscriptionForm.lastName,
          card_holder_email: this.subscriptionForm.email,
          frequency: this.subscriptionForm.frequency
        },
        stripe_token: res.id
      })
      .then((res) => {
        console.log('RES FROM TEST SUBSCRIPTION', res);
      })
      .catch((err) => {
        console.log('ERROR IN TEST SUBSCRIPTION', err);
      });
    });

  }

  closeModal() {
    this.$uibModalInstance.dismiss();
  }
};

SubscriptionController.$inject = ['$http', 'stripe', '$uibModalInstance', 'InvoicesService'];
