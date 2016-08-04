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
  language: DS.attr()
});
