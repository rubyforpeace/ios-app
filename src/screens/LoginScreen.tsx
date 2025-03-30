import { View, Image, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import tw from 'twrnc';

// note to self: removed previously added "w-65 h-auto pb-20 z-1" from rfgLogo

const justiceLogo = require('../../assets/justiceLogo.png');
const rfpLogo = require('../../assets/rfpLogo.png');

function LoginScreen() {
  return (
    <View style={tw`justify-between items-center gap-3 flex-1 bg-[#f2f2f2]`}>
      <View style={tw`flex flex-1 flex-col h-1/3 w-screen justify-end`}>
         <Image source={justiceLogo} style={tw`w-42 h-35 self-center`} />    
      </View>

      <View style={tw`justify-start items-center gap-4 flex h-1/3 w-screen bg-[#f2f2f2] pb-20`}>
        <AuthForm />
      </View>

      <View style={tw`flex h-1/3 w-screen items-center`}>
        <Image source={rfpLogo} style={tw`w-65 h-35 self-center`} />
      </View>
    </View>
  );
}

export default LoginScreen;
