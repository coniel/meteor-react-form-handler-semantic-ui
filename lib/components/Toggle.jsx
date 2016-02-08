Toggle = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.bool
    },
    getInitialState() {
        return {
            error: this.props.error
        }
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentDidMount() {
        $(this.refs.toggle).checkbox({
            onChecked: () => {
                this._onChange(true);
            },
            onUnchecked: () => {
                this._onChange(null);
            }
        });
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.error
        })
    },
    _onChange: function (checked) {
        this.setState({
            error: false
        });

        FormHandler.inputChanged(this.props.formId, this.props.name, checked);
    },
    render: function() {
        return (
            <div style={FormLayoutStyles[this.props.layoutStyle]}>
                <div className={(this.state.error === true)? 'field error' : 'field'}>
                    <div ref="toggle" className="ui toggle checkbox">
                        <input type="checkbox" {...this.props} />
                        <label>{this.props.label}</label>
                    </div>
                </div>
            </div>
        )
    }
});