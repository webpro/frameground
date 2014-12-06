var React = require('react'),
    Router = require('react-router');

var ContactFormMixin = {

    onChange: function(key, event) {
        var state = {};
        state[key] = event.target.value;
        this.setState(state);
    },

    render: function() {

        var contact = this.state || {};

        return (
            <form className="pure-form pure-form-aligned">
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" ref="name" value={contact.name} placeholder="Username" onChange={this.onChange.bind(this, 'name')}/>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref="email" value={contact.email} placeholder="Email" onChange={this.onChange.bind(this, 'email')}/>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" ref="phone" value={contact.phone} placeholder="Phone" onChange={this.onChange.bind(this, 'phone')}/>
                    </div>

                    <div className="pure-controls">
                        <button type="submit" className="pure-button pure-button-primary" onClick={this.onSubmit}>Save</button>
                    </div>
                </fieldset>
            </form>
        );
    }
};

module.exports = ContactFormMixin;
