DatePicker = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.object
    },
    getInitialState() {
        return {
            value: this.props.defaultValue
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentDidMount() {
        // Initialize the datepicker
        $(this.refs.datepicker).datetimepicker();
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    },
    _onChange(event, date) {
        FormHandler.inputChanged(this.props.formId, this.props.name, date);
        this.setState({
            value: date
        });
    },
    render: function () {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className="field">
                    <label>{this.props.label}</label>
                    <input ref="datepicker" {...this.props} type="text" className="ui dropdown datetimepicker" />
                </div>
            </div>
        )
    }
});