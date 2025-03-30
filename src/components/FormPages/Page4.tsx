import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import Button from '../Button';
import tw from 'twrnc';

const submit = (miles, hours, minutes, date, allCheckboxes) => {
  const formData = {
    miles,
    hours,
    minutes,
    date,
    checkboxes: allCheckboxes,
  };

  // dispatch(submitForm(formData));
  console.log('Form Data Submitted:', formData);

  Alert.alert('Form Submitted!', JSON.stringify(formData, null, 2), [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
};

const Page4 = ({
  notes = [],
  handleNotesChange = [],
  miles = [],
  hours = [],
  minutes = [],
  date = [],
  allCheckboxes = [],
}) => (
  /* Case 4 (but actually 5) */
  <View style={tw`p-4`}>
    <Text style={tw`text-2xl text-center`}>5. Enter Enter Notes</Text>
    <Text style={tw`text-sm text-center`}>
      Please refer to individuals by their roles instead of their names. Ex: My supervisor joined me
      for a call with the social worker to discuss my youth.
    </Text>
    <TextInput
      multiline
      numberOfLines={20}
      maxLength={300}
      style={tw`text-lg border rounded rounded-xl bg-white pl-1 w-68.5 h-50`}
      placeholder="Enter notes here"
      textAlignVertical="top"
      value={notes}
      onChangeText={handleNotesChange}
    />
    <Text style={tw`text-center`}>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3A9BA4] rounded-3xl w-[30] h-[10] justify-center`}
        textStyle={tw`text-xl font-bold text-white text-center`}
        title="Submit"
        onPress={() => submit(miles, hours, minutes, date, allCheckboxes)}
      />
    </Text>
  </View>
);

export default Page4;
