FormActions = React.createClass({
    render: function() {
        let submitLabel = this.props.label || "actions.submit";
        let cancelLabel = this.props.label || "actions.cancel";
        submitLabel = TAPi18n.__(submitLabel);
        cancelLabel = TAPi18n.__(cancelLabel);

        let className = "ui button";

        if (this.props.className) {
            className += " " + this.props.className;
        }

        let submitButton = (typeof this.props.submitAction !== 'undefined')? <button {...this.props} className={className} onClick={this.props.submitAction}>{submitLabel}</button> : <button {...this.props} className={className} type="submit">{submitLabel}</button>
        return (
            <span style={{float: 'right', paddingTop: 15, paddingBottom: 15}}>
                <div {...this.props} className="ui button" style={{marginRight: 15}} onClick={this.props.cancelAction}>{cancelLabel}</div>
                {submitButton}
            </span>
        )
    }
});