'use strict';

//load React libraries
var React = require('react');
var ReactDOM = require('react-dom');

//message to show
var message = React.createElement(
    'h1',                  //html tag
    {attribute : 'value'}, //object of attributes
    'Hello World!'         //content
); 


//show the content in the web page (inside the tag with id="content")
ReactDOM.render(message, document.getElementById('content'));

console.log('message rendered!');
