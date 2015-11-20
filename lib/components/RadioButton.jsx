RadioButton = React.createClass({
    componentDidMount() {
        $(this.refs.checkbox).checkbox({
            onChecked: () => {
                this.props.onChange(this.props.value);
            }
        });
    },
    render: function () {
        return (
            <div className={(this.props.error === true)? 'field error' : 'field'}>
                <div ref="checkbox" className="ui radio checkbox">
                    <input {...this.props} type="radio" name={this.props.name} value={this.props.value} />
                    <label>{this.props.label}</label>
                </div>
            </div>
        )
    }
});