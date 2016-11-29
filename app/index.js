var React = require('react');
var ReactDom = require('react-dom');

/*var USER_DATA = {
 name: "Venkatesh D P",
 username: "dpvenkatesh",
 image: "https://lh3.googleusercontent.com/BdU-H70Ar0-T_qw661a-Zo7kJVWaNIzLxgS9JiVOCA724N9WxaasdNKizCtu_W5wEdbIix2sUg=w6720-h4200-rw-no"
 };

 var ProfilePic = React.createClass({
 render: function () {
 return <img src={this.props.image} alt="profile picture" style={{height: 100, width: 100}}/>
 }
 });


 var ProfileName = React.createClass({
 render: function () {
 return (
 <div>
 {this.props.name}
 </div>
 )
 }
 });

 var Link  = React.createClass({
 changeUrl: function() {
 window.location.replace(this.props.href)
 },
 render: function () {
 return (
 <span style={{color:'blue',cursor: 'pointer'}}
 onClick={this.changeUrl}>
 {this.props.children}
 </span>
 )
 }
 })

 var ProfileLink = React.createClass({
 render: function () {
 return (
 <div>
 <Link href={'https://www.github.com/' + this.props.username }>
 {this.props.username}
 </Link>
 </div>
 )
 }
 });

 var Avatar = React.createClass({

 render: function () {
 return (
 <div>
 <ProfilePic  image={this.props.user.image}/>
 <ProfileName name={this.props.user.name}/>
 <ProfileLink username={this.props.user.username}/>
 </div>
 )
 }
 });*/

var routes = require('./config/routes');
ReactDom.render(routes, document.getElementById('app'));