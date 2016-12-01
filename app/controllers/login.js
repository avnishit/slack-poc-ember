import Ember from 'ember';

export default Ember.Controller.extend({
    Usession: Ember.inject.service('session'),
    actions: {
      login () {
        this.get('Usession').login(this.get('username'));
        this.transitionToRoute('application');
      }
    }
});
