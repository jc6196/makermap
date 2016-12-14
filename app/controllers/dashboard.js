import Ember from 'ember';

export default Ember.Controller.extend({
  interests: ["spinning", "weaving", "knitting", "crocheting", "dyeing", "printing", "embroidery", "sewing", "quilting"],
  selected_interests: [ ],
  boroughs: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Statten Island"],
  selected_boroughs: [ ],
  selected_range: null,
  actions: {
    saveRange(value){
        let selected_range = value;
        this.set('selected_range', selected_range);
    }
  }
});

