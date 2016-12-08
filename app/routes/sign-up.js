
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  gMap: Ember.inject.service(),
                      
   actions: {
      save(model) {
        let myProfile = model;
        let myRange = this.controller.get('selected_range');
        let myBoroughs = this.controller.get('selected_boroughs');
        let myInterests = this.controller.get('selected_interests');
        let address = (myProfile.street +", "+ myProfile.city +", "+ myProfile.state);
        this.get('gMap')
          .geocode({address})
          .then((geocodes) => {
          let myLatitude = geocodes[0].geometry.location.lat();
          let myLongitude = geocodes[0].geometry.location.lng();
          this.set('myLat', myLatitude);
          this.set('myLong', myLongitude);
        });

        if (myProfile.email && myProfile.username && myProfile.password && myProfile.maker_type && myProfile.first_name && myProfile.last_name && myProfile.street && myProfile.city && myProfile.state && myProfile.zip && myBoroughs && myInterests && this.myLat && this.myLong) {
          let newProfile = this.store.createRecord('sign_up', {
            email: myProfile.email,
            username: myProfile.username,
            password: myProfile.password,
            maker_type: myProfile.maker_type,
            first_name: myProfile.first_name,
            last_name: myProfile.last_name,
            street: myProfile.street,
            city: myProfile.city,
            state: myProfile.state,
            zip: myProfile.zip,
            lat: this.myLat,
            long: this.myLong,
            range: myRange,
            selected_boroughs: myBoroughs,
            selected_interests: myInterests
          });
          newProfile.save();
          this.transitionTo('dashboard');
        } else {
          alert('Please fill in all sections.');
        }
    },
    cancel() {
      // Clear input fields
      this.set('model.email', null);
      this.set('model.username', null);
      this.set('model.password', null);
      this.set('model.maker_type', null);
      this.set('model.first_name', null);
      this.set('model.last_name', null);
      this.set('model.street', null);
      this.set('model.city', null);
      this.set('model.state', null);
      this.set('model.zip', null);
      this.set('model.lat', null);
      this.set('model.long', null);
      this.set('model.range', null);
      this.set('model.selected_boroughs', null);
      this.set('model.selected_interests', null);
      this.transitionTo('index');
    }
  }
});