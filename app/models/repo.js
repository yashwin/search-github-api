import DS from 'ember-data';

function kCount(count){
  if(parseInt(count,10) > 999) {
    return `${Math.round(count * 0.01) * 0.1}K`;
  } else {
    return `${count}`;
  }
}

export default DS.Model.extend({
  name: DS.attr(),
  full_name: DS.attr(),
  description: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  pushed_at: DS.attr(),
  stargazers_count: DS.attr(),
  watchers_count: DS.attr(),
  forks_count: DS.attr(),
  language: DS.attr(),

  star_count: Ember.computed('stargazers_count', function() {
    return kCount(this.get('stargazers_count'));
  }),
  watch_count: Ember.computed('watchers_count', function() {
    return kCount(this.get('watchers_count'));
  }),
  fork_count: Ember.computed('forks_count', function() {
    return kCount(this.get('forks_count'));
  }),

});
