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
        var formId = this.props.formId;
        var name = this.props.name;
        // Initialize the datepicker
        $(this.refs.datepicker).datetimepicker();
        $(this.refs.datepicker).on("dp.change", function (e) {
            FormHandler.inputChanged(formId, name, e.date.toDate());
        });
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    },
    render: function () {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className="field" style={{position: 'relative'}}>
                    <label>{this.props.label}</label>
                    <input ref="datepicker" {...this.props} type="text" className="ui dropdown datepicker" onChange={this._onChange} />
                </div>
            </div>
        )
    }
});