import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RenderFormPages from '../components/FormPages/RenderFormPages';
import tw from 'twrnc';

import Button from '../components/Button';

const CaseContactCreateScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < 4) setCurrentPage(currentPage + 1);
  };

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#535353]`}>
      <View style={tw`flex-col justify-center h-1/6`}>
        <Text style={tw`text-3xl text-white flex justify-start font-bold`}>Case Contact Create</Text>
      </View>

      <View style={tw`flex justify-around items-center rounded-xl bg-[#FEFEFE] h-4/6 w-80`}>
        <ScrollView style={tw`flex p-2 flex-col h-5/6 rounded-xl w-80`}>
          <RenderFormPages currentPage={currentPage} />
        </ScrollView>

        <View style={tw`flex flex-row w-80 justify-around`}>
          {currentPage > 1 && currentPage < 4 && (
            <Button
              title="Previous"
              textStyle={tw`font-bold text-[#3A9BA4] text-lg`}
              onPress={handlePreviousPage}
            />
          )}
          {currentPage < 4 ? (
            <Button title="Next" textStyle={tw`font-bold text-[#3A9BA4] text-lg`} onPress={handleNextPage} />
          ) : (
            <Button
              title="Previous"
              textStyle={tw`font-bold text-[#3A9BA4] text-lg`}
              onPress={handlePreviousPage}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default CaseContactCreateScreen;
