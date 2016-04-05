import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  isInvalid: Ember.computed.empty('model.description'),
  actions: {
    save() {
      console.log("I was clicked");
      if (this.get('isInvalid')) {
        this.set('errorMessage', 'Description cannot be blank!');
        return false;
      } else {
        return true;
      }
    }
  }
});
