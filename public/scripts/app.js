var CommentBox = require('./CommentBox');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={20000} />,
    document.getElementById('content')
);