"use strict";

foodMeApp.controller(
  "CustomerController",
  function CustomerController($scope, customer, $location, $timeout) {
    $scope.customerName = customer.name;
    $scope.customerAddress = customer.address;

    $scope.findRestaurants = function (customerName, customerAddress) {
      customer.name = customerName;
      customer.address = customerAddress;

      /* $location.url("/restaurants"); */

      //Cerrar el modal
      $timeout(function () {
        var modalElement = document.getElementById("sesionModal");
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
          modalElement.classList.remove("show");
          document.body.classList.remove("modal-open");
          var backdrop = document.querySelector(".modal-backdrop");
          if (backdrop) {
            backdrop.remove();
          }
        }

        // Redirigir a la página principal
        $location.url("/restaurants");
        $timeout(function () {
          window.location.reload();
        }, 100);
        /* $scope.$apply(); */
      }, 100); // El tiempo
    };
  }
);
