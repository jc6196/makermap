import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('sign-in');
  this.route('sign-up');
  this.route('search');
  this.route('search-results');
  this.route('maker-details');
  this.route('profile');
  this.route('dashboard');
});

export default Router;
