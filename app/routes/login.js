import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  Usession: Ember.inject.service('session'),
  beforeModel() {
      if (this.get('Usession').get('currentUser')!=null){
          this.get('Usession').logout();
      }
    },
  model() {
    console.log(Cookies.get('userId'));
    return {
      user : Cookies.get('userId')
    };
  }
});
