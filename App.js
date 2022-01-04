<script src="http://localhost:8097"></script>;
import React, { useEffect } from 'react';
import {
  View,
  Text,
  LogBox 
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import RootStackScreen from "./Screens/Login/RootStackScreen";
import { ActivityIndicator } from "react-native";
import { AuthContext } from './components/context';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  const [isloading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout( async () => {
    setIsLoading(false);
    }, 1000);
    getDataUserToken();
}, [userToken]);

  const getDataUserToken = () =>{
    try {
      AsyncStorage.getItem("userToken").then((value) => {
        if (value != null) {
          setUserToken(value);
          console.log('data user token APP:' +userToken+ '')
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const removeUserToken  = async () =>{
    try {
      await AsyncStorage.removeItem('userToken')
      await AsyncStorage.removeItem('user_info')
      console.log('remove use token, user info')
    } catch(e) {
      // remove error
    }
    console.log('Done.')
}

  const authContext = React.useMemo(() => ({
    signIn: async () => {
      getDataUserToken();
      setIsLoading(false);
    },
    signOut: async () => {
      removeUserToken();
      setUserToken(null);
      setIsLoading(false);
    },
  }) ,[]);

  if (isloading) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            {userToken != null ?(
              <Tabs />
            ):
            
            <RootStackScreen />
            }
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
