import PlayerInput from '../components/PlayerInput';
import PlayerPreview from '../components/PlayerPreview';

import React, {PropTypes} from 'react';
import {Provider, connect} from 'react-redux';
import {Link} from 'react-router';
import Action from '../actions';
class Battle extends React.Component {
  render() {
    var playerOneName = this.props.playerOneName;
    var playerTwoName = this.props.playerTwoName;
    var playerOneImage = this.props.playerOneImage;
    var playerTwoImage = this.props.playerTwoImage;
    //Present them first=>Done
    //Lets refactor more,Same code but less magic and more direct
    let playerOnePreview;
    let playerTwoPreview;
    let playerOneInput;
    let playerTwoInput;

    if (playerOneImage !== '') {
      playerOnePreview = (
        <PlayerPreview
          avatar={playerOneImage}
          username={playerOneName}
          onReset={this.props.onReset}
          id="playerOne"
        />
      );
    } else {
      playerOneInput = (
        <PlayerInput
          id="playerOne"
          label="Player One"
          val={this.props.playerOneInputVal}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
        />
      );
    }
    if (playerTwoImage !== '') {
      playerTwoPreview = (
        <PlayerPreview
          avatar={playerTwoImage}
          username={playerTwoName}
          onReset={this.props.onReset}
          id="playerTwo"
        />
      );
    } else {
      playerTwoInput = (
        <PlayerInput
          id="playerTwo"
          label="Player Two"
          val={this.props.playerTwoInputVal}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
        />
      );
    }
    return (
      <div className="row">
        {playerOneInput}
        {playerOnePreview}
        {playerTwoInput}

        {playerTwoPreview}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //
  return {
    playerOneName: state.battle.playerOneName,
    playerTwoName: state.battle.playerTwoName,
    playerOneImage: state.battle.playerOneImage,
    playerTwoImage: state.battle.playerTwoImage,
    playerOneInputVal: state.input.playerOneInput,
    playerTwoInputVal: state.input.playerTwoInput,
  };
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return {
    onSubmit: id => {
      dispatch(Action.Input.submitPlayer(id));
    },
    onChange: (id, val) => {
      dispatch(Action.Input.setInput(id, val));
    },
    onReset: id => {
      dispatch(Action.Battle.resetPlayer(id));
    },
  };
}
Battle.propTypes = {};
export default connect(mapStateToProps, mapDispatchToProps)(Battle);
