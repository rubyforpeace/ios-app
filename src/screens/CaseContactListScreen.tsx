import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

import CaseContactListCard from '../components/CaseContactListCard';

const CaseContactListScreen = ({ navigation }) => {
  const data = [{ name: '🏛 CINA-11-1002' }, { name: '🏛 CINA-11-1003' }, { name: '🏛 CINA-11-1004' }];

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#535353]`}> 
      <View style={tw`flex-col justify-center h-1/4`}>
        <Text style={tw`text-3xl text-white font-bold`}>MY CASES</Text>
      </View>

      <View style={tw`flex items-center h-3/5`}>

        <View style={tw`flex flex-col justify-center my-10 h-80`}>
          <FlatList
            data={data}
            renderItem={({ item }) => <CaseContactListCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </View> 
  );
};

export default CaseContactListScreen;
