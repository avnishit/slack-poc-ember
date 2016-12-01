import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    creator: DS.attr('string'),
    msgs:DS.hasMany('message')
});
