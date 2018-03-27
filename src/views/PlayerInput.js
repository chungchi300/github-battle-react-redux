var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column">
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          value={this.props.val}
          autoComplete="off"
          onChange={event => {
            event.preventDefault();
            this.props.onChange(this.props.id, event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log('clickded');
            this.props.onSubmit(this.props.id);
          }}
          className="button"
          type="submit"
          disabled={!this.props.val}
        >
          Submit
        </button>
      </div>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

PlayerInput.defaultProps = {
  label: 'Username',
};
module.exports = PlayerInput;
