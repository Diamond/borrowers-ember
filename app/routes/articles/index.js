import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('articles');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      let model = controller.get('model');
      model.rollbackAttributes();
    }
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
