Select = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        options: React.PropTypes.arrayOf(React.PropTypes.object),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },
    getInitialState() {
        return {
            value: this.props.defaultValue,
            error: this.props.error
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentDidMount() {
        // Initialize the dropdown (Semantic UI)
        $(this.refs.select).dropdown({
            onChange: this._onChange
        });
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.error
        });
    },
    _onChange(value) {
        this.setState({
            value: value,
            error: false
        });
        FormHandler.inputChanged(this.props.formId, this.props.name, value);
    },
    render: function () {

        let options = this.props.options;

        if (this.props.useAllowedValues) {
            if (this.props.allowedValues) {
                options = [];
                this.props.allowedValues.map((value) => {
                    options.push({label: value, value: value});
                });
            } else {
                console.error("Select input " + this.props.name + " has useAllowedValues but does not have any allowedValues");
            }
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className={(this.state.error === true)? 'field error' : 'field'}>
                    <label>{this.props.label}</label>
                    <div ref="select" className="ui selection dropdown">
                        <input type="hidden" name={this.props.name} />
                        <i className="angle down icon"></i>
                        <div className={(this.props.defaultValue)? 'text' : 'text default'}>{(this.props.defaultValue)? this.props.defaultValue : this.props.placeholder}</div>
                        <div className="menu">
                            {options.map((item) => {
                                return <div className="item" key={item.value} data-value={item.value}>{item.label}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});