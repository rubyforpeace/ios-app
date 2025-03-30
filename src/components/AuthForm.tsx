import React, { useState, useContext } from 'react';
import { TextInput, Text, StyleSheet, Modal, Pressable, View } from 'react-native';
import tw from 'twrnc';

import Button from './Button';
import CheckBox from './CheckBox';
import { Context as AuthContext } from '../components/context/AuthContext';

interface LoginFieldProps {
  errorMessage?: string;
}

const AuthForm: React.FC<LoginFieldProps> = ({
  errorMessage,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [staySignedIn, setStaySignedIn] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { signin } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      await signin(email, password);
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  const handleStaySignInToggle = () => {
    setStaySignedIn(!staySignedIn);
    if (!staySignedIn) setModalVisible(true);
  };

  return (
    <>
      <TextInput
        style={tw`flex text-[#434343] border-[#434343] border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Email"
        placeholderTextColor="#434343"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <TextInput
        style={tw`flex text-[#434343] border-[#434343] border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Password"
        placeholderTextColor="#434343"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
      />
      <CheckBox onPress={handleStaySignInToggle} title="Stay Logged In" isChecked={staySignedIn} />
      {errorMessage && <Text style={tw`pl-4 text-red-500`}>{errorMessage}</Text>}
      <Button
        buttonStyle={tw`flex bg-[#ea5a4e] rounded-3xl w-40 h-10  flex justify-center items-center
          ${!email || !password ? 'bg-gray-400' : 'bg-[#3a9ca6]'}`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Sign In"
        onPress={handleSignIn}
        disabled={!email || !password}
      />
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={tw`flex-1 justify-center items-center`}>
          <View style={tw`m-5 bg-white rounded-2xl p-9 items-center shadow-lg`}>
            <Text style={tw`mb-4 text-center`}>
              Your session will stay active until you sign out.
            </Text>
            <Pressable
              style={tw`rounded-2xl px-4 py-2 bg-[#3a9ca6]`}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={tw`text-white font-bold text-center`}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AuthForm;
