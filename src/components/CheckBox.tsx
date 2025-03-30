import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from 'twrnc';

const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={tw`flex-row items-center w-36 mt-1 mx-1`}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#434343" />
            </Pressable>
            <Text style={tw`text-[#434343] text-sm font-semibold ml-1`}>{props.title}</Text>
        </View>
    );
};

export default CheckBox;
