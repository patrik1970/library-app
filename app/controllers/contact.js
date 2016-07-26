import Ember from 'ember';

export default Ember.Controller.extend({
	email: '',
  	message: '',

  	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  	isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  	isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
	isNotValid: Ember.computed.not('isValid'),

	actions: {

    saveMessage() {
      alert(`Sending your message`);
      this.set('responseMessage', `Thank you! We will aswer you back as son as possible`);
    }
  }

});
