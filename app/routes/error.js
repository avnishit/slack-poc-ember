import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    var url = this.router.location.formatURL('/error');
    if (window.location.pathname !== url) {
      this.transitionTo('/error');
    }
  },
  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      this.transitionTo('/error');
    }
  }
});
