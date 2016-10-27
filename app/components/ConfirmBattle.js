var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function ConfirmBattle(props) {
	return props.isLoading == true
		? <p> Loading </p>
		: <p> Confirm Battle </p>
}

module.exports = ConfirmBattle
