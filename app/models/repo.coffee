`import DS from 'ember-data'`

kCount = (count) ->
  if parseInt(count,10) > 999
    Math.round((count * 0.01) * 0.1).toFixed(0)
  else
    count

RepoModel = DS.Model.extend
  name: DS.attr()
  fullName: DS.attr()
  description: DS.attr()
  createdAt: DS.attr()
  updatedAt: DS.attr()
  pushedAt: DS.attr()
  stargazersCount: DS.attr()
  watchersCount: DS.attr()
  forksCount: DS.attr()
  language: DS.attr()
  starCount: Ember.computed 'stargazersCount', ->
    return kCount this.get 'stargazersCount'
  watchCount: Ember.computed 'watchersCount', ->
    return kCount this.get 'watchersCount'
  forkCount: Ember.computed 'forksCount', ->
    return kCount this.get 'forksCount'


`export default RepoModel`
