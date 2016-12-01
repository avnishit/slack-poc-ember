import Ember from 'ember';

export default Ember.Route.extend({
  Usession: Ember.inject.service('session'),
  beforeModel() {
      if (this.get('Usession').get('currentUser')==null){
          this.transitionTo('login');
      }
    },
  model(param) {
    var convsG = this.get('Usession').get('DummyConvs');
    //var convG = $.grep(convsG.toArray(), function(e){ return e.title === param.conv_name; });
    var convG = convsG.filter(function (element) {
          return element.title === param.conv_name;
    })[0];
        return {
           convs : convsG,
           conv_id:convG.id,
           conv:convG,
           user : this.get('Usession').get('currentUser'),
        };
    }
});
