`import Ember from 'ember'`

SearchRoute = Ember.Route.extend
 model:  ->
   this.get('store').findAll('repo')

`export default SearchRoute`
