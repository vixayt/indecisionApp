class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
                <div>
                    <h1>Visibility Toggle!</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide details' : 'Show details'}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <p> These are some details </p>
                        </div>
                    )}
                </div>
            )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));