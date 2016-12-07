import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({ 
      lat: 40.7128,
      lng: -74.0059,
      zoom: 11,
      // Must be an Ember Array
      markers: Ember.A([
        {
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
        }
     ])
    })
  }
});

