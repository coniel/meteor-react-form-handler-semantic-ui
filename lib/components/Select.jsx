Select = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        options: React.PropTypes.arrayOf(React.PropTypes.object),
        defaultValue: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.array
        ])
    },
    getInitialState() {
        return {
            defaultValue: this.props.defaultValue,
            error: this.props.error
        }
    },
    componentWillMount() {
        if (this.props.formId) {
            FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
        }
    },
    componentDidMount() {
        // Initialize the dropdown (Semantic UI)
        $(this.refs.select).dropdown({
            onChange: this._onChange
        });

        if (this.props.multiple && this.state.defaultValue) {
            $(this.refs.select).dropdown('set selected',this.state.defaultValue);
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.error
        });
    },
    _onChange(value) {

        if (this.props.multiple) {
            var value = value.split(',');
        }

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

        let className = "ui selection dropdown";

        if (this.props.multiple) {
            className += " multiple";
        }

        if (this.props.search) {
            className += " search selection";
        }

        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className={(this.state.error === true)? 'field error' : 'field'}>
                    <label>{this.props.label}</label>
                    <div {...this.props} ref="select" className={className}>
                        <input type="hidden" name={this.props.name} />
                        <i className="angle down icon"></i>
                        <div className={(this.state.defaultValue)? 'text' : 'text default'}>{(this.state.defaultValue)? this.state.defaultValue : this.props.placeholder}</div>
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