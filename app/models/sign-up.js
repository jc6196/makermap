import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  maker_type: DS.attr('string'),
  company_name: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('number'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
  range: DS.attr('number'),
  selected_boroughs: DS.attr(),
  selected_interests: DS.attr()
});
