import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  full_name: DS.attr(),
  description: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  pushed_at: DS.attr(),
  stargazers_count: DS.attr(),
  watchers_count: DS.attr(),
  forks_count: DS.attr(),
  language: DS.attr(),

  stars_k_count: Ember.computed('stargazers_count',function(){
      let num = this.get('stargazers_count');
      if(parseInt(num,10) > 1000) {
        return `${Math.round(num * 0.01) * 0.1}K`;
      } else {
        return `${num}`;
      }
          return `${Math.round(num * 0.01) * 0.1}K`;
      }),
  watchers_k_count: Ember.computed('watchers_count',function(){
          let num = this.get('watchers_count');
          if(parseInt(num,10) > 1000) {
            return `${Math.round(num * 0.01) * 0.1}K`;
          } else {
            return `${num}`;
          }
              return `${Math.round(num * 0.01) * 0.1}K`;
          }),

  forks_k_count: Ember.computed('forks_count',function(){
              let num = this.get('forks_count');
              if(parseInt(num,10) > 1000) {
                return `${Math.round(num * 0.01) * 0.1}K`;
              } else {
                return `${num}`;
              }
                  return `${Math.round(num * 0.01) * 0.1}K`;
              })

});
