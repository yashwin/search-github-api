import DS from 'ember-data';

function kCount(count){
  if(parseInt(count,10) > 999) {
    return `${Math.round((count * 0.01) * 0.1).toFixed(0)}K`;
  } else {
    return `${count}`;
  }
}

export default DS.Model.extend({
  name: DS.attr(),
  fullName: DS.attr(),
  description: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  pushedAt: DS.attr(),
  stargazersCount: DS.attr(),
  watchersCount: DS.attr(),
  forksCount: DS.attr(),
  language: DS.attr(),

  starCount: Ember.computed('stargazersCount', function() {
    return kCount(this.get('stargazersCount'));
  }),
  watchCount: Ember.computed('watchersCount', function() {
    return kCount(this.get('watchersCount'));
  }),
  forkCount: Ember.computed('forksCount', function() {
    return kCount(this.get('forksCount'));
  }),

});
