import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(friend) {
      if (confirm("Are you sure you want to delete this record?")) {
        friend.destroyRecord().then(() => {
          this.transitionTo('friends.index');
        });
      }
      return false;
    }
  }

});
