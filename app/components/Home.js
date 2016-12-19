import React from 'react';
import {transparentBg} from '../styles';
import {Link} from 'react-router';

let Home = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                    <h1>Github Battle</h1>
                    <p className="lead">Some moto</p>
                    <Link to="/playerOne">
                        <button type="button" className="btm btn-lg btn-success">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
});

module.exports = Home;