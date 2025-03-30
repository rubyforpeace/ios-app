import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import Button from '../components/Button';
import { Context as AuthContext } from '../components/context/AuthContext';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  const { user } = state;

  const handleSignOut = async () => {
    try {
      await signout();
    } catch (err) {
      console.error('Error during sign-out:', err);
    }
  };

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#535353]`}>
      <View style={tw`flex-col justify-center h-1/5`}>
        <Text style={tw`text-3xl text-white font-bold`} testID="user:display_name">
          {user?.display_name ?? ''}
        </Text>
      </View>

      <View style={tw`flex justify-around items-center h-3/5`}>
        <Text style={tw`flex text-2xl text-white font-bold`} testID="user:email">
          {user?.email ?? ''}
        </Text>
        <Button
          buttonStyle={tw`flex bg-[#3a9ca6] rounded-3xl w-[40] h-[10] flex justify-center items-center`}
          textStyle={tw`text-xl font-bold text-white`}
          title="Sign out"
          titleColor="white"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
