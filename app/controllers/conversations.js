import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    postMessage(msg,model) {
      console.log ('Message Posted'+msg);
      console.log(model.user);
      model.convs[model.conv_id].msgs.pushObject({
        text: msg,
        author: model.user,
        timestamp: '2016-09-29 21:56:34' //Hardcoded
      });
      this.set('textMessageFromInput').set('');
    }
  }
});
