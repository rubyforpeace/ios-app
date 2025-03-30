import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

import CaseContactDetailCard from '../components/CaseContactDetailCard';

/*
         <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
          renderItem={({ item }) => <StyledCaseContactDetailCard item={item} />}
          keyExtractor={(item) => item.name}
        />
*/

const CaseContactDetailScreen = ({ navigation }) => {
  const data = [
    {
      name: `CASA, Education`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
    {
      name: `CASA, Health`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
    {
      name: `CASA, Family`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
  ];

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#535353]`}>
      <View style={tw`flex-col justify-center h-1/6`}>
        <Text style={tw`flex pt-4 text-white text-3xl font-bold`}>🏛CINA-11-1002</Text>
      </View>

      <View style={tw`flex flex-col bg-white rounded-xl items-center w-80 py-4 h-4/6 shadow-xl`}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
          renderItem={({ item }) => <CaseContactDetailCard item={item} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

export default CaseContactDetailScreen;
