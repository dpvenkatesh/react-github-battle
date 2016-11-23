var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: () => {
        return (
            <div> HelloWorld </div>
        )
    }
});

ReactDom.render(<HelloWorld />, document.getElementById('app'));