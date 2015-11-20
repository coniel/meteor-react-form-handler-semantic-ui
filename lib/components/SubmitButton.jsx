SubmitButton = React.createClass({
    render: function() {
        let label = this.props.label;
		
		if (FormHandler.i18n) {
			label = TAPi18n.__(label);
		}

        return (
            <button className="ui button" type="submit">{label}</button>
        )
    }
});