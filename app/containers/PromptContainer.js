/**
 * Created by venkatesha.p on 19/12/16.
 */

import React from 'react';
import Prompt from '../components/Prompt';

let PromptContainer = React.createClass({
    contextTypes:{
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
      return {
          username:''
      }
    },
    handleUsername: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    },
    handleSubmitUser: function (e) {
      e.preventDefault();
      let username = this.state.username;

      this.setState({
          username:''
      });
        console.log(this.props);
      if(this.props.routeParams.playerOne){
          //go to battle
          console.log(this.context);
          this.context.router.push({
              pathname: '/battle',
              query: {
                  playerOne: this.props.routeParams.playerOne,
                  playerTwo: this.state.username
              }
          })
      }else{
          //go to playerTwo
          //console.log(this.context);
          this.context.router.push("/playerTwo/"+this.state.username);
      }


    },
    render: function () {
        return (
            <Prompt
            onSubmitUser={this.handleSubmitUser}
            onUpdateUser={this.handleUsername}
            header={this.props.route.header}
            username={this.state.username}/>
        )
    }
});

module.exports = PromptContainer;