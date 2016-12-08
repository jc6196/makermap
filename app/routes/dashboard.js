import Ember from 'ember';

export default Ember.Route.extend({
  markersArray: Ember.A(),
  model(){
    return this.store.findAll('sign-up').then((result) => {
      // populate markers array with data from results
      result.forEach((item) => {
        console.log("marker found: " + item.get('username'));
        this.get('markersArray').pushObject({
          id: item.get('username'),
          lat: item.get('lat'),
          lng: item.get('long'),
          infoWindow: {
            content: '<h4>'+item.get('username')+'</h4><p>'+item.get('maker_type')+'</p><p>'+item.get('selected_interests')+'</p>',
            visible: false
            },
        });
      });
    });
  },
  setupController: function(controller) {
    controller.setProperties({ 
      lat: 40.7128,
      lng: -74.0059,
      zoom: 11,
      markers: this.get('markersArray'),
      // Must be an Ember Array
      /*
      markers: Ember.A([{
          id: 'unique-marker-id',  // Recommended
          lat: 40.784871, // Required
          lng: -73.971819,       // Required
          infoWindow: {
            content: '<p>Home</p>',
            visible: true
            },
          click: function(event, marker) {},
          rightclick: function(event, marker) {},
          dblclick: function(event, marker) {},
          mouseover: function(event, marker) {},
          mouseout: function(event, marker) {},
          mouseup: function(event, marker) {},
          mousedown: function(event, marker) {},
          drag: function(e, marker) {},
          dragstart: function(e, marker) {},
          dragend: function(e, marker) {}
        },
        {
          id: 'unique-marker-id-1',  // Recommended
          lat: 40.794871, // Required
          lng: -73.981819,       // Required
          infoWindow: {
            content: '<p>Work</p>',
            visible: true
            },
          click: function(event, marker) {},
          rightclick: function(event, marker) {},
          dblclick: function(event, marker) {},
          mouseover: function(event, marker) {},
          mouseout: function(event, marker) {},
          mouseup: function(event, marker) {},
          mousedown: function(event, marker) {},
          drag: function(e, marker) {},
          dragstart: function(e, marker) {},
          dragend: function(e, marker) {}
        },
     ])
     */
    });
  }
});

