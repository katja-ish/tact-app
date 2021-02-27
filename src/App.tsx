import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import store from './store';
import auth from '@react-native-firebase/auth';
import { Text } from './theme';
import { Button, View } from 'react-native';

const App = () => {
  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // const createAnonUser = () => {
  //   auth()
  //     .signInAnonymously()
  //     .then(() => {
  //       console.log('User signed in anonymously');
  //     })
  //     .catch((error) => {
  //       if (error.code === 'auth/operation-not-allowed') {
  //         console.log('Enable anonymous in your firebase console.');
  //       }

  //       console.error(error);
  //     });
  // };

  // const createUser = () => {
  //   auth()
  //     .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch((error) => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };

  // if (!user) {
  //   return (
  //     <View
  //       style={{
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         flex: 1,
  //       }}>
  //       <Text>Login</Text>
  //       <Button title={'Create User jane'} onPress={() => createUser} />
  //       <Button title={'Create Anonimous User'} onPress={() => createAnonUser} />
  //     </View>
  //   );
  // }

  return (
    // <View
    //   style={{
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //   }}>
    //   <Text>Welcome {user.email}</Text>
    // </View>

    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
