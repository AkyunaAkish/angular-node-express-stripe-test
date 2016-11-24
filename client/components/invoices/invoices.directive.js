import controller from './invoices.controller.js';

export default function() {
  return {
    template: require('./invoices.html'),
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};
