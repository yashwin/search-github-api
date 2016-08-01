import Ember from 'ember';


export default Ember.Route.extend({
  queryParams: {
        q: { refreshModel: true },
        s: { refreshModel: true }
      },
    model(params){
    return Ember.$.getJSON(`https://api.github.com/search/repositories?q=${params.q}${params.s}`);
  }
});
