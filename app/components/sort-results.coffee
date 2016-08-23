`import Ember from 'ember'`

SortResultsComponent  = Ember.Component.extend
  results: null
  sortProperties : ['']
  sortedRepos : Ember.computed.sort 'results', 'sortProperties'
  actions:
    sortBy: (sortProperties) ->
      this.set 'sortProperties', [sortProperties]

`export default SortResultsComponent`
