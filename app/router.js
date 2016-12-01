import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('readme');
  this.route('conversations',{path:'/conversations/:conv_name'});
  this.route('start-conversation');
  this.route('error',{ path: '/*path' });
});

export default Router;
