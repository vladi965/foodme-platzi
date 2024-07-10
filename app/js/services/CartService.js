"use strict";

/* foodMeApp.service("CartService", function () {
  var cart = {
    items: [],
  };

  this.addItem = function (menuItem, restaurant) {};

  this.getTotalItemsInCart = function () {
    return cart.items.reduce((total, item) => total + item.qty, 0);
  };

  this.getCart = function () {
    return cart;
  };
}); */
foodMeApp.service("CartService", function () {
  var cart = {
    items: [],
  };

  return {
    getCart: function () {
      return cart;
    },
    addItem: function (menuItem, restaurant) {
      var found = false;
      for (var i = 0; i < cart.items.length; i++) {
        if (cart.items[i].name === menuItem.name) {
          cart.items[i].qty += 1;
          found = true;
          break;
        }
      }
      if (!found) {
        cart.items.push({
          name: menuItem.name,
          price: menuItem.price,
          qty: 1,
        });
      }
    },
    getTotalItemsInCart: function () {
      var total = 0;
      for (var i = 0; i < cart.items.length; i++) {
        total += cart.items[i].qty;
      }
      return total;
    },
  };
});
