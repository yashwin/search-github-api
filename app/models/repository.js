import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    full_name: attr('string'),
    description: attr('string') 
});
