import Ember from "ember";

export default Ember.ObjectController.extend({
    needs: ['contact'],
    actions: {
        save: function(contact) {
            contact.save();
            this.transitionToRoute('contacts');
        }
    }
});
