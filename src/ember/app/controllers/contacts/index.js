import Ember from "ember";

export default Ember.ArrayController.extend({
    needs: ['contacts'],
    sortProperties: ['name'],
    sortAscending: true,
    actions: {
        delete: function(contact) {
            contact.deleteRecord();
            contact.save();
            this.transitionToRoute('contacts');
        }
    }
});
