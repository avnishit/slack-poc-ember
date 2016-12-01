
import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Service.extend({
  currentUser: null,
  DummyConvs : [
      {id: 0, title: 'EmberNJ', creater: 'ABC',msgs: [
        {
          text: 'Hi.. Something ',
          author : 'ABCDE',
          timestamp : '2016-09-29 12:15:56'
        },
        {
          text: 'Bla Bla Bla',
          author : 'XYZ',
          timestamp : '2016-09-29 12:15:56'
        },
        {
          text: 'Something ... bla ... more ...',
          author : 'MNP',
          timestamp : '2016-09-29 12:15:56'
        }

      ]},
      {id: 1, title: 'EmberTeam', creater: 'ABC',msgs: [
        {
          text: 'Hi.. Something ',
          author : 'ABCDE',
          timestamp : '2016-09-29 12:15:56'
        },
        {
          text: 'Bla Bla Bla',
          author : 'XYZ',
          timestamp : '2016-09-29 12:15:56'
        }

      ]},
      {id: 2, title: 'BITS Pilani Alums', creater: 'Raghav AV',msgs: [

        {
          text: 'Something ... bla ... more ...',
          author : 'MNP',
          timestamp : '2016-09-29 12:15:56'
        }

      ]},
      {id: 3, title: 'NodeJS Ninjas', creater: 'Sudhir',msgs: []},
      {id: 4, title: 'CSS Chicks', creater: 'Twinkle',msgs: [
        {
          text: 'Hi.. Something ',
          author : 'ABCDE',
          timestamp : '2016-09-29 12:15:56'
        },
        {
          text: 'Bla Bla Bla',
          author : 'XYZ',
          timestamp : '2016-09-29 12:15:56'
        },
        {
          text: 'Something ... bla ... more ...',
          author : 'MNP',
          timestamp : '2016-09-29 12:15:56'
        }

      ]}
  ],
  dummyUser : "Avnish Chandra",
  login(user){
    Cookies.remove('userId');
    this.set("currentUser", user);
    Cookies.set('userId', user);
  },
  logout(){
    this.set("currentUser", null);
    Cookies.remove('userId');
  },
  initializeFromCookie: function(){
    var user = Cookies.get('userId');
    if(user){
      this.set('currentUser', user);
    }
  }.on('init')
});
