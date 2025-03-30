import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const CaseContactDetailCard = ({ item }) => {
  return (
    <View
      style={tw`flex justify-between flex-col items-center rounded-xl  border-b-4 border-slate-300/70 w-[70] border-x-2 h-[45] pb-8 px-6`}>
      <View>
        <Text style={tw`flex text-center text-lg font-bold text-[#3A9BA4]`}>{item.name}</Text>

        <Text style={tw`flex text-center text-md text-[#b6b6b6] font-bold`}>
          {item.description}
        </Text>
      </View>

      <Text style={tw`flex text-center justify-end text-md font-bold`}>{item.input}</Text>
    </View>
  );
};

export default CaseContactDetailCard;
