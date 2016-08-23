import DS from 'ember-data';

function kCount(count){
  if(parseInt(count,10) > 999) {
    return `${Math.round((count * 0.01) * 0.1).toFixed(0)}K`;
  } else {
    return `${count}`;
  }
}

export default DS.Model.extend({
  full_name: DS.attr(),
  description: DS.attr(),
  stargazers_count: DS.attr(),
  watchers_count: DS.attr(),
  forks_count: DS.attr(),
  language: DS.attr(),

  starCount: Ember.computed('stargazers_count', function() {
    return kCount(this.get('stargazers_count'));
  }),
  watchCount: Ember.computed('watchers_count', function() {
    return kCount(this.get('watchers_count'));
  }),
  forkCount: Ember.computed('forks_count', function() {
    return kCount(this.get('forks_count'));
  }),
});
