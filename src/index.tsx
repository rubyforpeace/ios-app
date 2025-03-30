import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import Button from './components/Button';
import { Context as AuthContext } from './components/context/AuthContext';
import AccountScreen from './screens/AccountScreen';
import CaseContactCreateScreen from './screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './screens/CaseContactDetailScreen';
import CaseContactListScreen from './screens/CaseContactListScreen';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function CustomTabBar({ navigation }) {
  return (
    <View style={tw`flex-row pb-10 items-center justify-around h-1/8 w-full bg-[#434343] py-1`}>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="My Cases"
        onPress={() => navigation.navigate('CaseContactListScreen')}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[25] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Create"
        onPress={() => navigation.navigate('CaseContactCreateScreen')}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Account"
        onPress={() => navigation.navigate('AccountScreen')}
      />
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="CaseContactListScreen" component={CaseContactListScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="CaseContactCreateScreen" component={CaseContactCreateScreen} />
      <Tab.Screen name="CaseContactDetailScreen" component={CaseContactDetailScreen} />
    </Tab.Navigator>
  );
}

function Main() {
  const { state, tryLocalSignin } = useContext(AuthContext);
  // Attempt to restore token from AsyncStorage when the app starts
  /*
  useEffect(() => {
    tryLocalSignin();
  }, []);
  */

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {state.isSignedIn ? (
          <RootStack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

//registerRootComponent(App);
export default Main;
