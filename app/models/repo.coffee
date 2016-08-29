`import DS from 'ember-data'`

kCount = (count) ->
  if parseInt(count,10) > 999
    Math.round((count * 0.01) * 0.1).toFixed(0)
  else
    count

RepoModel = DS.Model.extend
full_name: DS.attr()
description: DS.attr()
language: DS.attr()
stargazers_count: DS.attr()
watchers_count: DS.attr()
forks_count: DS.attr()
  starCount: Ember.computed 'stargazers_count', ->
    return kCount this.get 'stargazers_count'
  watchCount: Ember.computed 'watchers_count', ->
    return kCount this.get 'watchers_count'
  forkCount: Ember.computed 'forks_count', ->
    return kCount this.get 'forks_count'


`export default RepoModel`
