import Ember from "ember";

export default Ember.ObjectController.extend({
    needs: ['contact'],
    actions: {
        save: function() {
            this.get('model').save();
            this.transitionToRoute('contacts');
        }
    }
});
