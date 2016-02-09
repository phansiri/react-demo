'use strict';

//load React libraries
var React = require('react');
var ReactDOM = require('react-dom');
//var GameState = require('./component');
//
////message to show
//var message = React.createElement(
//    'h1',                  //html tag
//    {attribute : 'value'}, //object of attributes
//    'Hello World You!! NOT'         //content
//);
//
//var message2 = <h1>Hello World!</h1>;
//var imgUrl = 'http://goo.gl/n1tBtn';
//var pic = <img src={imgUrl} />;
//
//
////show the content in the web page (inside the tag with id="content")
//ReactDOM.render(<GameState />, document.getElementById('content'));
//
//console.log('message rendered!');


//var MessageItem = React.createClass({
//    render: function() {
//        return <li>{this.props.message}</li>;
//    }
//});
//
//var MessageList = React.createClass({
//    render: function() {
//        return (
//            <div>
//                <MessageItem message={this.props.message[0]} />
//                <MessageItem message={this.props.message[1]} />
//                <MessageItem message={this.props.message[2]} />
//                <MessageItem message={this.props.message[3]} />
//            </div>
//        )
//    }
//});
//
//var message = [
//    'Hello World!', 'Goodbye!', 'Time for dinner!', 'What?!'
//];

/**
 * How to put them into array and stuff - use a 'map' function
 * Most common way to add into this sort of tree
 */

var MessageItem = React.createClass({

    // how to create a new function inside message item...
    handleClick: function() {
        console.log('You clicked me!' + this.props.message);
    },

    render: function() {
        return <li onClick={this.handleClick}>{this.props.message}</li>;
    }
});

var MessageList = React.createClass({
    render: function() {
        var msgItems = this.props.message.map(function(value, index) {
            return <MessageItem message={(index+1) + ' ' + value} />
        //    having 'this' will refer this this one
        }, this);

        return (
            <ul>{msgItems}</ul>
        )
    }
});

var message = [
    'Hello World!', 'Goodbye!', 'Time for dinner!', 'What?!'
];


/**
 * Maping example - look up
 * @type {number[]}
 */
var array = [1,2,3,4];
var newArray = array.map(function(n) {
    return n*2; //multiple the item by 2
});

ReactDOM.render(
    <MessageList message={message} />, document.getElementById('content')
);


/**
 * can transformItem with map by passing 3 parameters like...
 */




//var LikeButton = React.createClass({
//    getInitialState: function() {
//        return {liked: false};
//    },
//    handleClick: function(event) {
//        this.setState({liked: !this.state.liked});
//    },
//    render: function() {
//        var text = this.state.liked ? 'like' : 'haven\'t liked';
//        return (
//            <p onClick={this.handleClick}>
//                You {text} this. Click to toggle.
//            </p>
//        );
//    }
//});
//
//ReactDOM.render(
//    <LikeButton />,
//    document.getElementById('content')
//);