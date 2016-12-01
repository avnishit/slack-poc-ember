import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  Usession: Ember.inject.service('session'),
  beforeModel() {
      if (this.get('Usession').get('currentUser')==null){
          this.transitionTo('login');
      }
    },
  model() {
    console.log(Cookies.get('userId'));
    return {
      user : Cookies.get('userId'),
      convs : this.get('Usession').get('DummyConvs')
    } ;
  }
});
