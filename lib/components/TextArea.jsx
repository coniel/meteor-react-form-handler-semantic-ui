TextArea = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    getInitialState() {
        return {
            error: this.props.error
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.error
        });
    },
    _onChange(event) {

        this.setState({
            error: false
        });

        let value = event.nativeEvent.target.value;
        FormHandler.inputChanged(this.props.formId, this.props.name, value);
    },
    render: function() {

        let textareaRows = this.props.rows || 2;
        let className = this.props.textareaClass || "";

        if (typeof this.props.resize !== 'undefined') {
            className += " resize-" + this.props.resize;
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className={(this.state.error === true)? 'field error' : 'field'}>
                    <label>{this.props.label}</label>
                    <textarea {...this.props} className={className} rows={textareaRows} onChange={this._onChange}></textarea>
                </div>
            </div>
        )
    }
});