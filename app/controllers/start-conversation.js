import Ember from 'ember';

export default Ember.Controller.extend({
  Usession: Ember.inject.service('session'),
  actions : {
    addConv(msg,model) {
      console.log ('Message Posted'+msg);
      var convDuplicate = model.convs.filter(function (element) {
            return element.title === msg;
      })[0];

      if(!convDuplicate) {
        var newId=model.convs.length;
        console.log(newId);
        model.convs.pushObject({
          id:newId,
          title: msg,
          creator: model.user,
          msgs:[]
        });
        this.transitionToRoute('conversations',msg);
        this.set('convname').set('');
      }
      else {
        this.set('convname').set('Another conv channel with a similar name exists.');
      }
    }
  }
});
