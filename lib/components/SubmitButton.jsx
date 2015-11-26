SubmitButton = React.createClass({
    render: function() {
        let label = this.props.label;
		let className = "ui button";
		
		if (this.props.className) {
			className += " " + this.props.className;
		}
		
		if (FormHandler.i18n) {
			label = TAPi18n.__(label);
		}

        return (
            <button {...this.props} className={className} type="submit">{label}</button>
        )
    }
});