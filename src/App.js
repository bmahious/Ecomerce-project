import React from 'react';
import HomePage from './pages/homepage/homePage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';



class App extends React.Component  {
  
  constructor() {
    super();
    this.state = {
        currentUser : null
    }
  }

unsubscribeFromAth = null;

componentDidMount() {
  this.unsubscribeFromAth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})

    console.log(user)
  })
}
componentWillUnmount() {
  this.unsubscribeFromAth();
}


  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/'  component={HomePage} />
          <Route  path='/shop'  component={ShopPage} />
          <Route  path='/signin'  component={SignInAndSignUpPage} />
        </Switch>
          
      </div>
    );
  }
  
}

export default App;
