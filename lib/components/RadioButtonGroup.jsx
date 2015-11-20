RadioButtonGroup = React.createClass({
    getInitialState() {
        return {
            error: this.props.error
        }
    },
    propTypes: {
        name: React.PropTypes.string.isRequired,
        layoutStyle: React.PropTypes.oneOf(AvailableFormLayoutStyles),
        defaultValue: React.PropTypes.string
    },
    componentWillMount() {
        FormHandler.initializeInput(this.props.formId, this.props.name, this.props.defaultValue);
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            error: nextProps.error
        })
    },
    _onChange: function (selected) {
        this.setState({
            error: false
        });

        console.log("called on change");

        FormHandler.inputChanged(this.props.formId, this.props.name, selected);
    },
    _renderRadioButtons() {

        let buttonNumber = 0;

        return React.Children.map(this.props.children, (radioButton) => {
            var newProps = _.extend(_.clone(radioButton.props), {name: this.props.name, buttonNumber: buttonNumber, onChange: this._onChange, error: this.state.error});

            if (this.props.defaultValue === radioButton.props.value) {
                newProps.defaultChecked = true;
            }

            buttonNumber++;

            return React.cloneElement(radioButton, newProps);
        });
    },
    render: function () {
        return (
            <div className={(this.props.inline)? ' fields inline' : 'fields grouped'}>
                <div className={this.state.error? 'field error' : 'field'}>
                    <label>{this.props.label}</label>
                </div>
                {this._renderRadioButtons()}
            </div>
        )
    }
});