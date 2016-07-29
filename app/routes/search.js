import Ember from 'ember';


export default Ember.Route.extend({
  queryParams: {
        q: { refreshModel: true }
      },
    model(params){
    return Ember.$.getJSON(`https://api.github.com/search/repositories?q=${params.q}`);
  }
});
