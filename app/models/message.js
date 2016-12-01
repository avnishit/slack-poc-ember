import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    author: DS.attr('string'),
    timestamp: DS.attr('date', {
    defaultValue() { return new Date(); }
    })
});
