import React, { Component } from 'react';
import base from '../base';

class Auth extends Component {
  constructor(){
    super();

    this.state = ({
      uid: null,
    });

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
  base.onAuth((user)=> {
    if(user){
      this.authHandler(null, { user });
      }
    });
  }

  authenticate(provider){
    console.log(provider);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData){
    console.log(authData);
    this.setState({
      uid: authData.user.id,
    });
  }

  logout(){
    base.unauth();
    this.setState({uid: null});
  }

  renderLogin(){
    return(
      <nav className="login">
        <button className="facebook" onClick={()=> this.authenticate('facebook')}>Sign in with Facebook</button>
      </nav>
    );
  }

  render(){
    // if(!this.state.uid){
    //   return(<div>{this.renderLogin()}</div>)
    // }

    return(
      <div>
        {this.renderLogin()}
        <button onClick={()=>this.logout()}>Log out</button>
      </div>
    );
  }
}

export default Auth;
