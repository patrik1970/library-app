import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  	email: attr('string')
});

export default Ember.Route.extend({

  model() {
    return this.store.findAll('invitation');
  }

});
