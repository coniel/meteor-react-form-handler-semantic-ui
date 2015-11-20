TextInput = React.createClass({
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

        let inputType = this.props.type || "text";

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className={(this.state.error === true)? 'field error' : 'field'}>
                    <label>{this.props.label}</label>
                    <input {...this.props} type={inputType} onChange={this._onChange} />
                </div>
            </div>
        )
    }
});