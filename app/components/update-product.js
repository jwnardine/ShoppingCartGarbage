import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
