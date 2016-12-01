import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Route.extend({
  Usession: Ember.inject.service('session'),
  model() {
    console.log(Cookies.get('userId'));
    return {
      convs : this.get('Usession').get('DummyConvs'),
      user : Cookies.get('userId')
    } ;
  }
});
