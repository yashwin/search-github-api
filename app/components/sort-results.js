import Ember from 'ember';

export default Ember.Component.extend({
  results: null,
  sortProperties: [''],
  sortedRepos: Ember.computed.sort('results', 'sortProperties'),

  actions: {
    sortBy: function(sortProperties) {
      this.set('sortProperties', [sortProperties]);
    }
  }
});
