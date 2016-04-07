import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image'),
      };
      this.set('addNewProduct', false);
      this.sendAction('save2', params);
    }
  }
});
