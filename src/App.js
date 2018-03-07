import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggenIn: null };

 componentWillMount() {
  firebase.initializeApp({

   apiKey: 'AIzaSyBVHDcD97l2-8ny563do_uC8aXD9M8ypFA',
   authDomain: 'authentication-29bce.firebaseapp.com',
   databaseURL: 'https://authentication-29bce.firebaseio.com',
   projectId: 'authentication-29bce',
   storageBucket: 'authentication-29bce.appspot.com',
   messagingSenderId: '324420098467'
 });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggenIn: true });
    } else {
      this.setState({ loggenIn: false });
    }
  });
}

 renderContent() {
  switch (this.state.loggenIn) {
    case true:
     return (
       <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
         Logout
        </Button>
      </CardSection>
     );
    case false:
     return <LoginForm />;
    default:
     return <View style={styles.spinnerStyle}><Spinner size='large' /></View>;
   }
 }

render() {
  return (
    <View>
     <Header headerText='Authentication' />
     {this.renderContent()}
    </View>
  );
}
}

const styles = {
  spinnerStyle: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
