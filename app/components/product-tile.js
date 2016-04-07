import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    update(product, params) {
      this.sendAction('update', product, params);
    },

    delete(product) {
      if (confirm('You sure you wanna delete this product?')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
