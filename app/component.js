'use strict';

var GameState = React.createClass({

    render: function() {
        if(Math.random < 0.5) {
            return <h1>Tails!</h1>
        } else {
            return <h1>Heads!</h1>
        }
        //return <h1>game state goes here</h1>
    }
});

module.exports = GameState;