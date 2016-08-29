import Ember from 'ember';


 export default Ember.Route.extend({
   queryParams: {
         q: { refreshModel: true },
         sort: {refreshModel:true},
         order: {refreshModel: true},
       },
     model(params){
     return Ember.$.getJSON(`https://api.github.com/search/repositories?q=${params.q}&sort=${params.sort}&order=${params.order}`);
   }
 });
